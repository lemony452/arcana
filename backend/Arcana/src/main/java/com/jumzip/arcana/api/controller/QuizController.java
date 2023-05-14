package com.jumzip.arcana.api.controller;

import com.jumzip.arcana.db.entity.Message;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(description = "Quiz API", name = "QUIZ")
@RestController
@RequestMapping("api/v1/quiz/")
@RequiredArgsConstructor
public class QuizController {

    private final SimpMessageSendingOperations operations;

    // 서버 시간 보내는 API
    @GetMapping("servertime")
    public long getUnixTime() {
        return System.currentTimeMillis();
    }
    
    // FE에서 특정 서버 시간일때만 알림창 > 로그인체크 > 입장
    // SERVERTIME 20:58부터 커넥션 객체 생성 가능(스케줄러로 OK 보낼것)

    // 페이지 입장 시 uid를 들고 들어온다 -> 메세지타입 Enter, user uid 필요
    @MessageMapping(value = "/enter") // /pub/enter
    public void quizEnter(Message message) {
        operations.convertAndSend("/sub/channel/" + message.getChannel(), message);
        message.setUserCount(message.getUserCount()+1);
    }

    // 서버타임 21시에 10문제 중복없이 뽑아두기(스케줄러)
    @GetMapping()
    public void getQuizSet() {

    }


    // BE에서 QUIZ 메세지타입으로 1문제씩 보냄(FE에서 요청메세지 보낸거 받을때마다 뿌려준다)

    // FE에서 틀린 사람 처리/페이지 나간사람 처리 -> Quit 메세지타입, uid 필요
    @MessageMapping(value = "/quit") // /pub/quit
    public void quizQuit(Message message) {
        operations.convertAndSend("/sub/channel/" + message.getChannel(), message);
        message.setUserCount(message.getUserCount()-1);
    }

    // Success 들어오면 커넥션 객체를 destroy 한다


}
