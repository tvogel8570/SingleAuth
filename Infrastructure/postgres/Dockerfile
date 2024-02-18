FROM postgres:16-alpine

RUN apk update && \
    apk upgrade --latest

# set default user and working directory
USER postgres
WORKDIR /var/lib/postgresql

 # copy database initialization script and database backup to where it will be automatically executed on FIRST startup only
COPY sql/init/* /docker-entrypoint-initdb.d/
