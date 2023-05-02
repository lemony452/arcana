package com.jumzip.arcana;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

// Test 미사용으로 인한 properties 추가
@SpringBootTest(properties = "spring.profiles.active:prod")
class ArcanaApplicationTests {

    @Test
    void contextLoads() {
    }

}
