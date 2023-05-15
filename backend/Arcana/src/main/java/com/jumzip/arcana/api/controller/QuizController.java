package com.jumzip.arcana.api.controller;

import com.jumzip.arcana.api.service.QuizService;
import com.jumzip.arcana.db.entity.Message;
import com.jumzip.arcana.db.entity.QuizList;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    private final Logger logger = LoggerFactory.getLogger(QuizController.class);

    private final SimpMessageSendingOperations operations;
    private final QuizService quizService;

    // 서버 시간 보내는 API
    @GetMapping("servertime")
    public long getUnixTime() {
        return System.currentTimeMillis();
    }

    // SERVERTIME 21시 10문제 중복없이 뽑아두기 <<<<<< 스케줄러 등록!!
    @GetMapping("quizlist")
    public ResponseEntity<?> getQuizList() {
        logger.info("start getQuizList");

        try {
            QuizList quizList = quizService.getQuizList();
            logger.info("quizlist is " + quizList);

            return new ResponseEntity<>(quizList, HttpStatus.OK);
        } catch (Exception e) {
            logger.info("get QuizList error - " + e.getMessage(), e);

            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

    // SERVERTIME 20:58부터 커넥션 객체 생성 가능 <<<<<< 스케줄러!!
    // 이거... 내쪽에서 어케해줘야함?? API??? 배치+스케줄러 하면 요청없이도 API가 보내지나???

    // 페이지 입장 시 uid를 들고 들어온다 -> 메세지타입 Enter, user uid 필요
    @MessageMapping(value = "/enter") // /pub/enter
    public void quizEnter(Message message) {
        operations.convertAndSend("/sub/channel/" + message.getChannel(), message);
        message.setUserCount(message.getUserCount()+1);
    }

    // FE에서 틀린 사람 처리/페이지 나간사람 처리 -> Quit 메세지타입, uid 필요
    @MessageMapping(value = "/quit") // /pub/quit
    public void quizQuit(Message message) {
        operations.convertAndSend("/sub/channel/" + message.getChannel(), message);
        message.setUserCount(message.getUserCount()-1);
    }

    // quizQuit API Success 들어오면 커넥션 객체를 destroy 한다 << Response로 바꿔주기


}
