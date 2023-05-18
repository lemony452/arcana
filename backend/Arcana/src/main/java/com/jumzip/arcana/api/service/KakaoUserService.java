package com.jumzip.arcana.api.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.jumzip.arcana.db.entity.User;
import javax.servlet.http.HttpServletResponse;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;

public interface KakaoUserService {

    public User kakaoLogin(String code, HttpServletResponse response) throws JsonProcessingException;

    public String getAccessToken(String code) throws JsonProcessingException;

    public User getKakaoUserInfo(String accessToken) throws JsonProcessingException;

    public User registerKakaoUserIfNeed (User kakaoUserInfo);

//    public Authentication forceLogin(User kakaoUser);

//    public void kakaoUsersAuthorizationInput(Authentication authentication, HttpServletResponse response);



}
