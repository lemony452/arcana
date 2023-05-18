FROM openjdk:11
VOLUME /tmp
EXPOSE 18081
ARG jar_file=build/libs/Arcana-0.0.1-SNAPSHOT.jar

COPY ${jar_file} ARCANAserver.jar
ENTRYPOINT ["java", "-jar", "/ARCANAserver.jar"]
