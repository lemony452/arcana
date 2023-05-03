FROM openjdk:11
VOLUME /tmp
EXPOSE 18081
ARG jar_file=build/libs/test.jar

COPY ${jar_file} hellotest.jar
ENTRYPOINT ["java", "-jar", "/hellotest.jar"]
