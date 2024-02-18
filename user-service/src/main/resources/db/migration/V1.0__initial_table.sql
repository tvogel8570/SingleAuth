CREATE SCHEMA IF NOT EXISTS db;

CREATE TABLE IF NOT EXISTS keycloak_users
(
    id       UUID         NOT NULL UNIQUE,
    name        text NOT NULL,
    CONSTRAINT pk_keycloak_users PRIMARY KEY (id)
);