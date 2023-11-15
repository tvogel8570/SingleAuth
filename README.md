# Spring Boot Employee Management Application

This is a sample Spring Boot application for managing employee data. The application includes authentication and authorization using Keycloak and Azure AD.

## Endpoints

### 1) /api/v1/employee/login
- Method: GET
- Description: This endpoint redirects to Keycloak for authentication. The Keycloak configuration can be set up to include redirection to Azure AD.
- Authorization: Public

### 2) /api/v1/employee/{employeeId}
- Method: PUT
- Description: This endpoint is used to update a specific employee by providing the employee ID.
- Authorization: Requires authentication and appropriate authorization based on user roles.

### 3) /api/v1/employees
- Method: GET
- Description: This endpoint retrieves all employees.
- Authorization: Requires authentication and appropriate authorization based on user roles.

## Azure AD Integration

To authorize access to the application, Azure AD groups can be used to assign specific roles such as "admin" and "user". The application can then enforce authorization based on these roles.

## Configuration

The application requires configuration for Keycloak and Azure AD integration. Please refer to the appropriate documentation for setting up Keycloak and Azure AD integration.

### Keycloak Configuration

1. Set up Keycloak as an identity provider.
2. Configure the Keycloak client and realm settings.
3. Add the appropriate redirection to Azure AD in the Keycloak configuration.

### Azure AD Configuration

1. Set up Azure AD as an identity provider.
2. Configure the Azure AD application and permissions.
3. Assign roles (e.g., "admin", "user") to Azure AD groups for authorization.

## Prerequisites

- Java JDK 8 or higher
- Maven

## Build and Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run the following command to build the application:
