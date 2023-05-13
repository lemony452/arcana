package com.jumzip.arcana.api.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(description = "Quiz API", name = "QUIZ")
@RestController
@RequestMapping("api/v1/quiz/")
@RequiredArgsConstructor
public class QuizController {

    //HandShake Req 받아서 Res 하는 API

    // FE에서 특정 서버 시간일때만 알림창 > 로그인체크 > 입장
    // SERVERTIME 20:58부터 커넥션 객체 생성
    // 페이지 입장 시 uid를 들고 들어온다 -> 메세지타입 Enter, user uid 필요

    // 그러면 Entity가 필요하다 MessageType, uid, userCount(인원수) 필수
    // userCount default = 0, 타입이 ENTER일때마다 +1 QUIT일때마다 -1

    // 서버타임 21시에 FE는 알림창을 닫고 게임 시작 메세지 보냄(GAMESTART) -> 이거 받으면 10문제 중복없이 뽑아두기
    // BE에서 QUIZ 메세지타입으로 1문제씩 보냄
    // FE에서 틀린 사람 처리/페이지 나간사람 처리 -> Quit 메세지타입, uid 필요

    // 10문제 모두 끝나면 reward API 호출 > 티켓 제공 요청 받아서 uid 별로 테이블에 +1
    // Success 들어오면 커넥션 객체를 destroy 한다


}
