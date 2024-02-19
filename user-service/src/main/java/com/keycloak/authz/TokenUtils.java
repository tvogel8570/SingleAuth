package com.keycloak.authz;

import io.micrometer.common.util.StringUtils;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.oauth2.jwt.Jwt;

public class TokenUtils {

    private static final String AUTHORIZATION_HEADER = "Authorization";
    private static final String BEARER_PREFIX = "Bearer ";
    private static final String SCOPE = "groups";

    private TokenUtils() {
    }

    public static Optional<String> getBearerToken(final HttpServletRequest request) {
        return Optional.ofNullable(request.getHeader(AUTHORIZATION_HEADER))
            .filter(TokenUtils::validateToken)
            .map(token -> token.substring(BEARER_PREFIX.length()));
    }


    public static List<GrantedAuthority> extractAuthorities(final Jwt token) {
        final List<String> authorities = token.getClaimAsStringList(SCOPE);
        return authorities.isEmpty()
            ? AuthorityUtils.NO_AUTHORITIES
            : AuthorityUtils.createAuthorityList(authorities.toArray(String[]::new));
    }

    private static boolean validateToken(final String token) {
        return StringUtils.isNotBlank(token)
            && token.startsWith(BEARER_PREFIX)
            && token.length() > BEARER_PREFIX.length();
    }
}