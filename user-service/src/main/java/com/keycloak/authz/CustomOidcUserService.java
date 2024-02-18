package com.keycloak.authz;

import com.keycloak.user.KeycloakUserService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserRequest;
import org.springframework.security.oauth2.client.oidc.userinfo.OidcUserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class CustomOidcUserService extends OidcUserService {

  private final KeycloakUserService keycloakUserService;
  private final JwtDecoder jwtDecoder;

  @Override
  public OidcUser loadUser(OidcUserRequest userRequest) throws OAuth2AuthenticationException {
    keycloakUserService.save(userRequest.getIdToken().getEmail());
    List<GrantedAuthority> authorities = TokenUtils.extractAuthorities(jwtDecoder.decode(userRequest.getIdToken().getTokenValue()));
    var user =  super.loadUser(userRequest);

    authorities.addAll(user.getAuthorities());

    return new DefaultOidcUser(authorities, userRequest.getIdToken());
  }
}
