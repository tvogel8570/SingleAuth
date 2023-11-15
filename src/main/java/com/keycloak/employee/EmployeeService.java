package com.keycloak.employee;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @PostConstruct
    public void initializeEmployeeTable() {
        Employee emp1 = new Employee();
        emp1.setName("john");
        emp1.setSalary(20000);
        employeeRepository.save(emp1);
        emp1 = new Employee();
        emp1.setName("mak");
        emp1.setSalary(55000);
        employeeRepository.save(emp1);
    }

    public Employee getEmployee(int employeeId) {
        return employeeRepository
                .findById(employeeId)
                .orElse(null);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository
                .findAll();
    }
}
