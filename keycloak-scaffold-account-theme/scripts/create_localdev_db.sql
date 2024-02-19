CREATE USER localdevuser WITH PASSWORD 'password1';
CREATE DATABASE keycloak;
GRANT ALL PRIVILEGES ON DATABASE keycloak TO localdevuser;
