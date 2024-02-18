package com.keycloak.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface KeycloakUserRepository extends JpaRepository<KeycloakUser, Integer> {
}
