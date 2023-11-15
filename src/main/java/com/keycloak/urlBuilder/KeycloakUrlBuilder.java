package com.keycloak.urlBuilder;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class KeycloakUrlBuilder {

    @Value("${keycloak.auth-server-url}")
    private String keycloakAuthServerUrl;

    @Value("${keycloak.realm}")
    private String keycloakRealm;

    @Value("${keycloak.resource}")
    private String keycloakResource;

    public String buildKeycloakUrl() {
        return keycloakAuthServerUrl + "/realms/" + keycloakRealm + "/protocol/openid-connect/auth"
                + "?response_type=code&client_id=" + keycloakResource + "&redirect_uri=your-redirect-uri";
    }
}
