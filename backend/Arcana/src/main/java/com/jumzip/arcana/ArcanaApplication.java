package com.jumzip.arcana;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.TimeZone;

@EnableScheduling
@OpenAPIDefinition(servers = {@Server(url = "https://k8d107.p.ssafy.io", description = "Default Server URL")})
@SpringBootApplication
public class ArcanaApplication {
    private final Logger logger = LoggerFactory.getLogger(ArcanaApplication.class);

    @PostConstruct
    public void startSetTimeZone() {
        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
        logger.info("Now - " + new Date());
    }

    public static void main(String[] args) {
        SpringApplication.run(ArcanaApplication.class, args);

    }

}
