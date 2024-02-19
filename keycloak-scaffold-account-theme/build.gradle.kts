plugins {
    java
    jacoco
    id("io.freefair.lombok") version "6.4.0"
    id("com.github.johnrengelman.shadow") version "7.1.2"
    id("com.diffplug.spotless") version "6.11.0"
}

group = "scaffold"
version = System.getenv("IMAGE_TAG") ?: "0.0.1-SNAPSHOT"
val keycloakVersion = "22.0.1"


dependencies {
    compileOnly("org.keycloak:keycloak-core:${keycloakVersion}")
    compileOnly("org.keycloak:keycloak-server-spi:${keycloakVersion}")
    compileOnly("org.keycloak:keycloak-server-spi-private:${keycloakVersion}")
    compileOnly("org.keycloak:keycloak-services:${keycloakVersion}")
    compileOnly("org.keycloak:keycloak-model-infinispan:${keycloakVersion}")

    compileOnly("org.jboss.logging:jboss-logging:3.5.0.Final")


}
repositories {
    mavenCentral()
}

tasks.shadowJar {
    mergeServiceFiles()
    exclude("/themes")
}

tasks {
    val createJarFromResources by registering(Jar::class) {
        val resourcesDir = project.file("src/main/resources/themes")
        from(resourcesDir)
        into("META-INF") {
            from("src/main/resources/themes/theme/thomas-darimont-internal/META-INF")
        }
        archiveBaseName.set("thomas-darimont-internal")
        archiveVersion.set("")
        archiveExtension.set("jar")
    }
}

tasks.getByName("shadowJar").dependsOn("createJarFromResources")


spotless {
    java {
        target(
                fileTree(projectDir) {
                    include("src/**/*.java")
                },

                );
        removeUnusedImports();
        googleJavaFormat("1.15.0");
        indentWithTabs(2)
        indentWithSpaces(4)
    }
}
