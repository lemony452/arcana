package com.jumzip.arcana.config;

import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@Log4j2
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.headers().frameOptions().sameOrigin()
            .and()
            .httpBasic().disable() // REST API는 UI를 사용하지 않으므로 기본설정을 비활성화
            .csrf().disable();; // REST API는 csrf 보안이 필요 없으므로 비활성화
    }

}
