package com.keycloak.user;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class KeycloakUserService {

    private final KeycloakUserRepository keycloakUserRepository;

    public void save(String username) {
        var kcUser = KeycloakUser.builder().name(username).build();
        var example = Example.of(kcUser);

        if (keycloakUserRepository.exists(example)) {
            return;
        }

        keycloakUserRepository.save(KeycloakUser.builder().name(username).build());
    }
}
