
Running the project is done via `make` commands

- make run - rebuilds the project and creates a docker image and starts up the keycloak instance
- make up - just starts the services
- make down - puts down services

---

For local development, but since we'll use social login this won't be needed.

Change /etc/hosts entry to point to keycloak docker container:

```/ets/hosts
127.0.0.1       keycloak
```
![img.png](img.png)

---


In order to support social login we need to use [ngrok](https://ngrok.com/) and port-forward to 8080.

```ngrok http 8080```

Also the URL got from ngrok needs to be added under realm frontend URL :

![img_1.png](img_1.png)