package com.jumzip.arcana.api.serviceImpl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jumzip.arcana.api.service.KakaoUserService;
import com.jumzip.arcana.api.service.UserService;
import com.jumzip.arcana.db.entity.User;
import com.jumzip.arcana.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class KakaoUserServiceImpl implements KakaoUserService {
    private final Logger logger = LoggerFactory.getLogger(KakaoUserServiceImpl.class);

    private final int WEEKLY_COUNT = 5;

    @Value("${kakao.client}")
    String CLIENT_ID;

    private final UserRepository userRepository;

    private final UserService userService;


    @Override
    public User kakaoLogin(String code, HttpServletResponse response)
        throws JsonProcessingException {

        // 1. "인가 코드"로 "액세스 토큰" 요청
        String accessToken = getAccessToken(code);

        // 2. 토큰으로 카카오 API 호출
        User kakaoUserInfo = getKakaoUserInfo(accessToken);

        // 3. 카카오ID로 회원가입 처리
        User kakaoUser = registerKakaoUserIfNeed(kakaoUserInfo);

        // 4. 강제 로그인 처리
        // Authentication authentication = forceLogin(kakaoUser);

        // 5. response Header에 JWT 토큰 추가
        // kakaoUsersAuthorizationInput(authentication, response);

        return kakaoUserInfo;
    }

    @Override
    public String getAccessToken(String code) throws JsonProcessingException {
        logger.info("start getAccessToken");

        // HTTP Header 생성
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HTTP Body 생성
        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("grant_type", "authorization_code");
        body.add("client_id", CLIENT_ID);
        body.add("redirect_uri", "https://k8d107.p.ssafy.io/authkakao");
        body.add("code", code);

        // HTTP 요청 보내기
        HttpEntity<MultiValueMap<String, String>> kakaoTokenRequest = new HttpEntity<>(body, headers);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(
            "https://kauth.kakao.com/oauth/token",
            HttpMethod.POST,
            kakaoTokenRequest,
            String.class
        );

        // HTTP 응답 (JSON) -> 액세스 토큰 파싱
        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);

        return jsonNode.get("access_token").asText();
    }

    @Override
    public User getKakaoUserInfo(String accessToken) throws JsonProcessingException {
        logger.info("start getKakaoUserInfo");

        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "Bearer " + accessToken);
        headers.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        // HTTP 요청 보내기
        HttpEntity<MultiValueMap<String, String>> kakaoUserInfoRequest = new HttpEntity<>(headers);
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> response = rt.exchange(
            "https://kapi.kakao.com/v2/user/me",
            HttpMethod.POST,
            kakaoUserInfoRequest,
            String.class
        );

        // responseBody에 있는 정보를 꺼냄
        String responseBody = response.getBody();
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(responseBody);

        logger.info(jsonNode.toString());

        String uid = jsonNode.get("id").asText();
        String email = jsonNode.get("kakao_account").get("email").asText();
        String nickname = email;

        User newUser = new User();
        newUser.setUid(uid);
        newUser.setNickname(userService.makeAnimalNickname());
        newUser.setEmail(email);
        newUser.setProvider("kakao");
        newUser.setWeekly_count(WEEKLY_COUNT);

        return newUser;
    }

    @Override
    public User registerKakaoUserIfNeed(User kakaoUserInfo) {
        logger.info("start registerKakaoUserIfNeed");

        // DB 에 중복된 email이 있는지 확인
        String kakaoEmail = kakaoUserInfo.getEmail();
        User kakaoUser = userRepository.findByEmail(kakaoEmail);

        if (kakaoUser == null) {
            userRepository.saveUser(kakaoUserInfo);
        }
        else {
            logger.info("kakao user is " + kakaoUser.getEmail());
        }

        return kakaoUser;
    }

}
