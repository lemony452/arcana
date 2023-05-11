package com.jumzip.arcana;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(servers = {@Server(url = "https://k8d107.p.ssafy.io", description = "Default Server URL")})
@SpringBootApplication
public class ArcanaApplication {

    public static void main(String[] args) {
        SpringApplication.run(ArcanaApplication.class, args);

    }

}
