package com.keycloak.authn;

import java.util.Map;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.IdTokenClaimNames;

@Configuration
public class KeycloakConfiguration {
  public static final String KEYCLOAK_REGISTRATION_ID = "keycloak";

  @Bean
  public ClientRegistrationRepository clientRegistrationRepository() {
    return new InMemoryClientRegistrationRepository(this.keycloakClientRegistration());
  }

  // the url used here is from ngrok as Facebook/Google won't let usage of localhost or other non-TLD / non-https domains
  private ClientRegistration keycloakClientRegistration() {
    return ClientRegistration.withRegistrationId(KEYCLOAK_REGISTRATION_ID)
        .clientId("spring-boot-app")
        .providerConfigurationMetadata(Map.of("end_session_endpoint", "https://cb0f-93-87-220-158.ngrok-free.app/realms/multiple-auth/protocol/openid-connect/logout"))
        .clientSecret("YJkRElgCvEZ6DdiKDDhgnWBLRwvY7Jvu")
        .issuerUri("https://cb0f-93-87-220-158.ngrok-free.app/realms/multiple-auth")
        .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
        .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
        .redirectUri("{baseUrl}/login/oauth2/code/{registrationId}")
        .scope("openid", "profile")
        .authorizationUri("https://cb0f-93-87-220-158.ngrok-free.app/realms/multiple-auth/protocol/openid-connect/auth")
        .tokenUri("https://cb0f-93-87-220-158.ngrok-free.app/realms/multiple-auth/protocol/openid-connect/token")
        .userInfoUri("https://cb0f-93-87-220-158.ngrok-free.app/realms/multiple-auth/protocol/openid-connect/userinfo")
        .userNameAttributeName(IdTokenClaimNames.SUB)
        .jwkSetUri("https://cb0f-93-87-220-158.ngrok-free.app/realms/multiple-auth/protocol/openid-connect/certs")
        .clientName("Keycloak")
        .build();
  }
}
