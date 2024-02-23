# Makefile for keycloak-scaffold project
# Run `sdk env` prior to build/package commands

help:
		@echo "Makefile commands:"
		@echo "package - packages the uber-jar & builds the image"

.DEFAULT_GOAL := help

# Package
package:
	@cd src/main/resources/themes/theme/timothy-vogel-internal/account/src/ && npm i && npm run build
	@./gradlew createJarFromResources && docker buildx build . -t keycloak-account-modified
