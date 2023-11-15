package com.keycloak.employee;

import java.util.List;
import javax.annotation.security.RolesAllowed;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/employee")
@RequiredArgsConstructor
public class EmployeeController {
  private final EmployeeService service;

  //this method can be accessed by user whose role is user
  @PutMapping("/employeeId")
  @RolesAllowed("user")
  public ResponseEntity<Employee> getEmployee(@PathVariable int employeeId) {
    return ResponseEntity.ok(service.getEmployee(employeeId));
  }

  //this method can be accessed by user whose role is admin
  @GetMapping
  @RolesAllowed("admin")
  public ResponseEntity<List<Employee>> findALlEmployees() {
    return ResponseEntity.ok(service.getAllEmployees());
  }

}
