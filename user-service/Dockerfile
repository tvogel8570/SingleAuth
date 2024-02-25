FROM quay.io/keycloak/keycloak:23.0.1
WORKDIR /opt/keycloak/
# This is to invalidate the layer cache for COPY...
RUN ls
ARG VERSION=0.0.1-SNAPSHOT
COPY keycloak/libs/keycloak-scaffold-${VERSION}-all.jar providers/
COPY keycloak/libs/thomas-darimont-internal.jar providers/
RUN ./bin/kc.sh build  \
    --db=postgres \
    --health-enabled=true \
    --metrics-enabled=true \
    --features=admin-fine-grained-authz,declarative-user-profile,update-email,impersonation,preview \
    --features-disabled=ciba,client-policies,par,step-up-authentication \
    --spi-well-known-openid-configuration-include-client-scopes=false \
    --cache=ispn \
    --cache-stack=kubernetes \
    --spi-x509cert-lookup-provider=nginx
