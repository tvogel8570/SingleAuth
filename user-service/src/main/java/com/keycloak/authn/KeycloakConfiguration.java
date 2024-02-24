package com.keycloak.authn;

import java.net.URL;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.ClientRegistrations;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.IdTokenClaimNames;

@Configuration
@RequiredArgsConstructor
public class KeycloakConfiguration {
  public static final String KEYCLOAK_REGISTRATION_ID = "keycloak";

  private final ClientConfiguration clientConfiguration;

  @Value("${keycloak.base.url}")
  private String baseUrl;

  @Bean
  public ClientRegistrationRepository clientRegistrationRepository() {
    return new InMemoryClientRegistrationRepository(this.keycloakClientRegistration());
  }

  // the url used here is from ngrok as Facebook/Google won't let usage of localhost or other non-TLD / non-https domains
  private ClientRegistration keycloakClientRegistration() {
    var keycloakRegistration = ClientRegistrations.fromIssuerLocation(baseUrl);

    return keycloakRegistration
        .registrationId(KEYCLOAK_REGISTRATION_ID).clientId(clientConfiguration.id)
        .clientSecret(clientConfiguration.secret)
        .clientName("Keycloak")
        .scope("openid", "profile")
        .providerConfigurationMetadata(Map.of("end_session_endpoint", baseUrl + "/protocol/openid-connect/logout"))
        .build();
  }
}
