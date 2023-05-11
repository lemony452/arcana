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
    //HandShake Res와 함께 세션을 생성한다.

    //문제 세트 전송 요청 받아서 보내기

    /*1 여러명이 방에 들어온다
2 서버타임 20시 58에 세션 오픈 요청 받는다
3 서버타임 21시에 게임스타트 요청 받아서 문제 세트를 보낸다
// 4 게임스타트 요청~문제 넘어갈때마다 세션에 남은 사람 수&정답 선택 수 받기
5 틀리면 세션에서 퇴출(FE)
6 문제 10개 다 풀었음 -> 전체 정답인거 체크하고(FE) -> 맞으면 티켓 제공 요청 받기
7 해당 uid에 티켓 제공
8 토큰 지급이 끝나면 세션 끊기 요청 받는다*/
}
