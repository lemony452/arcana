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

    //HandShake Res와 함께 세션을 생성한다. (서버타임 20시 58분, 단일세션)

    //문제 세트 전송 요청 받아서 보내기 (서버타임 21시)
    //문제 끝날때마다 요청받아 세션에 남은 총 인원수 카운트해서 보내기(정답 픽률 계산용)

    //티켓 제공 요청 받아서 uid 별로 테이블에 +1
    //세션 끊기 요청 - 문제 틀렸거나 토큰 수령 완료시 요청

}
