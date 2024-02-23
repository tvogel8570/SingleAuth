
run:
	@mvn clean && mvn compile jib:dockerBuild && docker compose up -d user
up:
	@docker compose up -d user
up-keycloak:
	@docker compose up -d keycloak-2
down:
	@docker compose down -v --remove-orphans
