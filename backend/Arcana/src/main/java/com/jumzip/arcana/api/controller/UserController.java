package com.jumzip.arcana.api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.jumzip.arcana.api.request.UserRegisterRequest;
import com.jumzip.arcana.api.service.KakaoUserService;
import com.jumzip.arcana.api.service.UserService;
import com.jumzip.arcana.db.entity.TimeCard;
import com.jumzip.arcana.db.entity.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@Tag(description = "USER API", name = "USER")
@RestController
@RequestMapping("api/v1/user/")
@RequiredArgsConstructor
public class UserController {
    private final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;
    private final KakaoUserService kakaoUserService;

    /* Firebase */
    // uid 헤더로 받아오기, uid로 검색
    // 없는 uid라면 DB에 추가(신규회원) > 닉네임
    // 있는 uid라면 기존회원

/*    @GetMapping("/uid/{email}")
    @Operation(summary = "UID 체크", description = "기존 사용자라면 true를 리턴한다")
    public ResponseEntity<Boolean> CheckUid(@PathVariable String email) {
        return userService.CheckUid(email) + "";
        boolean result = userService.CheckUid(email);
        return ResponseEntity.status(200).body(result);
    }*/

/*
    OAuth 액세스 토큰이 포함된 샘플 응답
    https://firebase.google.com/docs/reference/rest/auth?hl=ko

    {
        "federatedId": "http://facebook.com/1234567890",
            "providerId": "facebook.com",
            "localId": "5xwsPCWYo...",
            "emailVerified": true,
            "email": "user@example.com",
            "oauthAccessToken": "[FACEBOOK_ACCESS_TOKEN]", <----- ?
            "firstName": "John",
            "lastName": "Doe",
            "fullName": "John Doe",
            "displayName": "John Doe",
            "idToken": "[ID_TOKEN]", <--------------------------- ?
            "photoUrl": "https://scontent.xx.fbcdn.net/v/...",
            "refreshToken": "[REFRESH_TOKEN]", <----------------- ?
            "expiresIn": "3600",
            "rawUserInfo": "{\"updated_time\":\"2017-02-22T01:10:57+0000\",\"gender\":\"male\", ...}"
    }
    이걸 그대로 받아와서 User Entity에 해당하는 값을 대입
*/
    @Operation(summary = "User DB에 등록", description = "사용자의 정보를 리턴한다")
    @PostMapping("register")
    public User registerUser(@RequestBody UserRegisterRequest userReq) {
        User user = userService.registerUser(userReq);
        return user;
    }

    @Operation(summary = "UserInfo 조회", description = "사용자의 정보를 리턴한다")
    @GetMapping("info")
    public User GetUserInfo(@RequestHeader String uid) {
        User user = userService.getUserData(uid);
        return user;
    }

    @Operation(summary = "User 닉네임 변경", description = "변경된 닉네임을 리턴한다")
    @PutMapping("nickname")
    public String UpdateUserNickname(@RequestHeader String uid, @RequestParam String nickname) {
        String newName = userService.getUserData(uid).getNickname();
        return nickname + " Changed " + newName;
    }

    @Operation(summary = "User 탈퇴")
    @DeleteMapping("delete")
    public String DeleteUser(@RequestHeader String uid) {
        User user = userService.getUserData(uid);
        userService.deleteUser(uid);
        return user.getEmail() + " Delete Complete";
    }

    @Operation(summary = "Kakao 로그인")
    @GetMapping("kakao")
    public User kakaoLogin(@RequestParam String code, HttpServletResponse response) throws JsonProcessingException {
        logger.info("start kakaoLogin");

        return kakaoUserService.kakaoLogin(code, response);
    }

    @Operation(summary = "quiz 후 reward 제공")
    @PutMapping("reward")
    public String getReward(@RequestParam String uid, @RequestParam int ticket) {
        int nowTicket = userService.rewardUser(uid, ticket);
        return "YOUR TICKET : " + nowTicket;
    }

}
