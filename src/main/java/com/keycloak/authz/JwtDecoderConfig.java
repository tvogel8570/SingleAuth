package com.keycloak.authz;

import static com.keycloak.authn.KeycloakConfiguration.KEYCLOAK_REGISTRATION_ID;


import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtDecoders;
import org.springframework.security.oauth2.jwt.JwtValidators;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;

@Configuration
@RequiredArgsConstructor
public class JwtDecoderConfig {
    private final ClientRegistrationRepository clientRegistrationRepository;

    @Bean
    public JwtDecoder jwtDecoder()  {
        var client = clientRegistrationRepository.findByRegistrationId(KEYCLOAK_REGISTRATION_ID);
        var clientId = client.getClientId();
        var clientIssuerURI = client.getProviderDetails().getIssuerUri();

        final OAuth2TokenValidator<Jwt> withAudience =
                new AudienceValidator(clientId);

        final OAuth2TokenValidator<Jwt> withIssuer =
                JwtValidators.createDefaultWithIssuer(clientIssuerURI);

        final OAuth2TokenValidator<Jwt> validator =
                new DelegatingOAuth2TokenValidator<>(withAudience, withIssuer);

        NimbusJwtDecoder jwtDecoder = JwtDecoders.fromOidcIssuerLocation(clientIssuerURI);
        jwtDecoder.setJwtValidator(validator);

        return jwtDecoder;
    }

}