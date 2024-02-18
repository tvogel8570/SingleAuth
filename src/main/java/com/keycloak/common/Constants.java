package com.keycloak.common;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum Constants {
  ADMIN_AUTHORITY("ADMIN"),
  USER_AUTHORITY("USER"),
  USER_PAGE("user"),
  ADMIN_PAGE("admin"),
  LOGOUT_SUCCESS("logout-success");

  private final String value;
}
