
run:
	@mvn clean && mvn compile jib:dockerBuild && docker compose up -d user
up:
	@docker compose up user
down:
	@docker compose down -v --remove-orphans
