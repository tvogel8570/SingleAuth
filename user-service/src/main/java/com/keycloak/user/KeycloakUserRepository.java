package com.keycloak.user;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KeycloakUserRepository extends JpaRepository<KeycloakUser, UUID> {
}
