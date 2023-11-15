package com.keycloak;

import com.keycloak.employee.Employee;
import com.keycloak.employee.EmployeeService;
import com.keycloak.urlBuilder.KeycloakUrlBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@SpringBootApplication
public class SpringBootKeycloakExampleApplication {
//
//    @Autowired
//    private KeycloakUrlBuilder keycloakUrlBuilder;
//
//    @GetMapping("/login")
//    public ModelAndView method() {
//        // login part gets outside of the service; and should use OAuth2 Authorization Code for fetching the token
////        return new ModelAndView("redirect:"+ keycloakUrlBuilder.buildKeycloakUrl());
//        return new ModelAndView();
//    }
//

    public static void main(String[] args) {
        SpringApplication.run(SpringBootKeycloakExampleApplication.class, args);
    }

}
