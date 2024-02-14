# Use cases

## Registration use case
- User navigates to https://mysite.com/registration
- Thymeleaf web form collects basic information: email address, desired screen name
- Thymeleaf web form allows selection of authentication method from pre-configured ones.  If userid/pwd, allows entry of these fields.
- on submit of web form
    - Authentication is validated
    - Authentication token and refresh token are captured
    - User is created in application Keycloak
    - basic information, authentication method and any authentication tokens are saved in appropriate datastore (Keycloak and/or application JPA)
- user is redirected to login form

## Login use case
- User navigates to https://mysite.com/login
- User selects authentication method by clicking on Google / Facebook login link or entering userid/pwd
- Authentication is validated
- Spring User Principal is loaded with information from application Keycloak that matches authentication including any roles defined for that user in Keycloak
- User is redirected to secured page based on role
    - role: User - user.html
    - role: Admin - admin.html

## Manage Authentication method
- User navigates to http://mysite.com/auth
- User's current authentication method(s) are displayed
- User can add / remove authentication methods
- Additional authentication methods are validated
- Adds/deletes are updated in appropriate datastore


## Notes
- Data retrieved from external authentication providers (Google / Facebook) are public attributes only.

