# SingleAuth

Starter project to allow multiple Authentication sources to use a single Authorization

A Spring Boot application that allows a user to login via different providers and maps that login to a single authorization stored in an application specific Keycloak server.

## Technology stack
- Spring Boot 3.2.2+
- Keycloak 23.06+
- UI - Thymeleaf
- Authentication providers
    - GitHub OAtuh
    - Facebook OAuth
    - Google OAuth
    - Username / password via application specific Keycloak server
- Authorization
    - Users mapped to either role User (default) or role Admin

## Functionality
- Register new user with preferred authentication provider.  Note: Creates new user in application specific Keycloak server
- Add authentication provider to existing user.
- Sign-in existing user via any of the configured authentication providers for that user
- Access secured web page for role User based on authorization roles retrieved from local Keycloak server
- Access secured web page for role Admin based on authorization roles retrieved from local Keycloak server

