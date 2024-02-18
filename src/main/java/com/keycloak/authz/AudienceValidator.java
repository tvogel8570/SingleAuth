package com.keycloak.authz;

import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.OAuth2ErrorCodes;
import org.springframework.security.oauth2.core.OAuth2TokenValidator;
import org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.util.Assert;

public class AudienceValidator implements OAuth2TokenValidator<Jwt> {

    private static final String EMPTY_AUDIENCE = "Audience is null or empty";

    private final String audience;

    public AudienceValidator(final String audience) {
        Assert.hasText(audience, EMPTY_AUDIENCE);
        this.audience = audience;
    }

    @Override
    public OAuth2TokenValidatorResult validate(final Jwt jwt) {
        // could happen if Jwt is access token
        if (jwt.getAudience() == null) {
            OAuth2TokenValidatorResult.failure(new OAuth2Error(OAuth2ErrorCodes.INVALID_TOKEN));
        }

        return jwt.getAudience().contains(audience)
                ? OAuth2TokenValidatorResult.success()
                : OAuth2TokenValidatorResult.failure(new OAuth2Error(OAuth2ErrorCodes.INVALID_TOKEN));
    }
}