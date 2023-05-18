package com.jumzip.arcana.api.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.jumzip.arcana.api.request.CountAndTicketRequest;
import com.jumzip.arcana.api.request.UpdateNicknameRequest;
import com.jumzip.arcana.api.request.UserRegisterRequest;
import com.jumzip.arcana.api.service.KakaoUserService;
import com.jumzip.arcana.api.service.UserService;
import com.jumzip.arcana.db.entity.TimeCard;
import com.jumzip.arcana.db.entity.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public ResponseEntity<?> registerUser(@RequestBody UserRegisterRequest userReq) {
        logger.info("start registerUser");
        logger.info("userReq - " + userReq.toString());

        try {
            User user = userService.registerUser(userReq);
            return new ResponseEntity<>(user, HttpStatus.OK);
        }

        catch (Exception e) {
            logger.info("User REGISTER ERROR : " + e.getMessage(), e);
            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "UserInfo 조회", description = "사용자의 정보를 리턴한다")
    @GetMapping("info")
    public ResponseEntity<?> GetUserInfo(@RequestHeader String uid) {
        logger.info("start GET User INFO");

        try {
            User user = userService.getUserData(uid);
            return new ResponseEntity<>(user, HttpStatus.OK);
        }

        catch (Exception e) {
            logger.info("User INFO GET ERROR : " + e.getMessage(), e);
            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "User 닉네임 변경", description = "변경된 닉네임을 리턴한다")
    @PutMapping("nickname")
    public ResponseEntity<?> UpdateUserNickname(@RequestBody UpdateNicknameRequest updateNicknameRequest) {
        logger.info("start UpdateUserNickname uid - " + updateNicknameRequest.getUid() +
                ", nickname - " + updateNicknameRequest.getNickname());

        try {
            User user = userService.updateUserNickname(updateNicknameRequest.getUid(), updateNicknameRequest.getNickname());
            logger.info("result - " + user.toString());

            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            logger.info("update UserNickname error - " + e.getMessage(), e);

            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "User 탈퇴")
    @DeleteMapping("delete")
    public ResponseEntity<?> DeleteUser(@RequestHeader String uid) {
        logger.info("start DELETE User");

        try {
            User user = userService.getUserData(uid);
            userService.deleteUser(uid);
            return new ResponseEntity<>(user.getEmail() + " DELETE SUCCESS", HttpStatus.OK);
        }

        catch (Exception e) {
            logger.info("User DELETE ERROR : " + e.getMessage(), e);
            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "Kakao 로그인")
    @GetMapping("kakao")
    public User kakaoLogin(@RequestParam String code, HttpServletResponse response) throws JsonProcessingException {
        logger.info("start kakaoLogin");

        return kakaoUserService.kakaoLogin(code, response);
    }

    @Operation(summary = "유저 가입 유무 조회", description = "반환값 true == 미가입 유저 " +
            " \n false == 가입 유저")
    @GetMapping("search")
    public ResponseEntity<?> searchUser(@RequestParam String email) {
        logger.info("start searchUser");

        try {
            return new ResponseEntity<>(userService.searchUser(email), HttpStatus.OK);
        } catch (Exception e) {
            logger.info("search User error - " + e.getMessage(), e);

            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "유저 위클리카운트 및 티켓 소모", description = "uid 및 " +
            " \n 소모할 자원 종류를 'Weekly' or 'Ticket'으로 보내주세요 ")
    @PutMapping("count")
    public ResponseEntity<?> useCountAndTicket(@RequestBody CountAndTicketRequest countAndTicketRequest) {
        logger.info("start useCountAndTicket");

        try {
            Map<String, Object> result = new HashMap<>();
            int nowValue = 0;
            String tokenType = countAndTicketRequest.getType();

            if (tokenType.equals("Weekly")) {
                nowValue = userService.useWeeklyCount(countAndTicketRequest.getUid());
            }
            else {
                nowValue = userService.useTicket(countAndTicketRequest.getUid());
            }

            logger.info("uid - " + countAndTicketRequest.getUid() + ", nowValue - " + nowValue);

            result.put("type", tokenType);
            result.put("nowValue", nowValue);

            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            logger.info("use CountAndTicket error - " + e.getMessage(), e);

            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "quiz 후 reward 제공")
    @PutMapping("reward")
    public ResponseEntity<?> getReward(@RequestParam String uid, @RequestParam int ticket) {
        logger.info("start Reward to User");

        try {
            int nowTicket = userService.rewardUser(uid, ticket);
            return new ResponseEntity<>("YOUR TICKET : " + nowTicket, HttpStatus.OK);
        }

        catch (Exception e) {
            logger.info("Reward ERROR : " + e.getMessage(), e);
            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

}
