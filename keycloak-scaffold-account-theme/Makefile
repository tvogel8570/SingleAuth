# Makefile for keycloak-scaffold project
# Run `sdk env` prior to build/package commands

help:
		@echo "Makefile commands:"
		@echo "package - packages the uber-jar & builds the image"

.DEFAULT_GOAL := help

# Package
package:
	@./gradlew shadowJar && docker buildx build . -t keycloak-account-modified

