package com.keycloak.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/")
@RequiredArgsConstructor
public class KeycloakUserController {

  //this method can be accessed by user whose role is user
  @GetMapping("user")
  public String getUser() {
    return "user";
  }

  //this method can be accessed by user whose role is admin
  @GetMapping("admin")
  public String getAdmin() {
    return "admin";
  }

}
