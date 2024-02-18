package com.keycloak.authn;



import static com.keycloak.authn.KeycloakConfiguration.KEYCLOAK_REGISTRATION_ID;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class LogoutController {
  private final ClientRegistrationRepository clientRegistrationRepository;
  @GetMapping(path = "/logout")
  public String logout(HttpServletRequest request) throws ServletException {
    request.logout();
    var endSession = clientRegistrationRepository.findByRegistrationId(KEYCLOAK_REGISTRATION_ID)
        .getProviderDetails().getConfigurationMetadata().get("end_session_endpoint");
    return "redirect:" +  endSession;
  }
  @GetMapping(path = "/logout-success")
  public String logoutSuccess(HttpServletRequest request) {
    return "logout-success";
  }

}
