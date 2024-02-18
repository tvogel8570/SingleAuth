package com.keycloak.authn;

import com.keycloak.common.Constants;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collection;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component
public class LoginSuccessHandler implements AuthenticationSuccessHandler {
  SimpleUrlAuthenticationSuccessHandler userSuccessHandler =
      new SimpleUrlAuthenticationSuccessHandler("/" + Constants.USER_PAGE.getValue());
  SimpleUrlAuthenticationSuccessHandler adminSuccessHandler =
      new SimpleUrlAuthenticationSuccessHandler("/" + Constants.ADMIN_PAGE.getValue());

  @Override
  public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
      Authentication authentication) throws IOException, ServletException {
    Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

    if (authorities.stream().anyMatch(r -> r.getAuthority().equals(Constants.ADMIN_AUTHORITY.getValue()))) {
      this.adminSuccessHandler.onAuthenticationSuccess(request, response, authentication);
      return;
    }

    if (authorities.stream().anyMatch(r -> r.getAuthority().equals(Constants.USER_AUTHORITY.getValue()))) {
      // if the user is not an admin delegate to the userSuccessHandler
      this.userSuccessHandler.onAuthenticationSuccess(request, response, authentication);
    }
  }
}
