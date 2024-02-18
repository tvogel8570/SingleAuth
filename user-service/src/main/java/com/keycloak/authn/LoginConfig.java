package com.keycloak.authn;


import com.keycloak.common.Constants;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.web.logout.OidcClientInitiatedLogoutSuccessHandler;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class LoginConfig {

  private final OAuth2UserService<OidcUserRequest, OidcUser> customOidcUserService;
  private final ClientRegistrationRepository clientRegistrationRepository;
  private final AuthenticationSuccessHandler loginSuccessHandler;

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

    http
        .oauth2Login(oauth2login -> oauth2login.successHandler(loginSuccessHandler)
            .userInfoEndpoint(o -> o.oidcUserService(customOidcUserService)))
        .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.ALWAYS))
        .authorizeHttpRequests(authorize -> authorize.requestMatchers("/logout-success").anonymous()
            .requestMatchers("/" + Constants.ADMIN_PAGE.getValue()).hasAuthority(Constants.ADMIN_AUTHORITY.getValue())
            .requestMatchers("/" + Constants.USER_PAGE.getValue()).hasAuthority(Constants.USER_AUTHORITY.getValue()))
        .logout((logout) -> logout.logoutSuccessUrl("/logout-success").logoutSuccessHandler(oidcLogoutSuccessHandler()));
    return http.build();
  }

  private LogoutSuccessHandler oidcLogoutSuccessHandler() {

    OidcClientInitiatedLogoutSuccessHandler oidcLogoutSuccessHandler =
        new OidcClientInitiatedLogoutSuccessHandler(
            this.clientRegistrationRepository);
    oidcLogoutSuccessHandler.setPostLogoutRedirectUri("{baseUrl}/logout-success");
    return oidcLogoutSuccessHandler;
  }

}