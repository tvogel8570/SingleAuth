# Keycloak project to build the custom timothy-vogel-internal theme

Running `make package` will build the image `keycloak-account-modified` 
and package up the theme jar `build/libs/timothy-vogel-internal.jar` into the image.

Only thing that needs to be done in Keycloak is to select the theme for related realm.
![img.png](img.png)

---

All of the changes to `ACCOUNT` theme are under `resources/themes/theme/timothy-vogel-internal/account/src/app`
and after changed you'll need to rebuild the Keycloak image and then bring it up as a docker container