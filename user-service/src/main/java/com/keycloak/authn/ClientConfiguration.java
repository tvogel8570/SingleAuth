package com.keycloak.authn;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "client")
@Data
public class ClientConfiguration {
  String id;
  String secret;
}
