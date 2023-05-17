package com.jumzip.arcana.config;

import com.jumzip.arcana.api.service.QuizService;
import com.jumzip.arcana.api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@EnableAsync
@RequiredArgsConstructor
public class SchedulerConfig {
    private final Logger logger = LoggerFactory.getLogger(SchedulerConfig.class);

    private final UserService userService;

    private final QuizService quizService;

    // Cron (초, 분, 시, 일, 월, 요일)
    @Async
    @Scheduled(cron = "0 0 0 * * 1")
    public void resetWeeklyCount() {
        logger.info("start resetWeeklyCount - " + new Date());

        try {
            userService.resetWeeklyCount();
        } catch (Exception e) {
            logger.info("reset WeeklyCount Error - " + e);
        }
    }

    // Cron (초, 분, 시, 일, 월, 요일)
    @Async
    @Scheduled(cron = "0 0 0 * * *")
    public void resetQuiz() {
        logger.info("start resetQuiz - " + new Date());

        try {
            logger.info(quizService.resetQuizList(10).toString());
        } catch (Exception e) {
            logger.info("reset Quiz Error - " + e);
        }
    }

    // Cron (초, 분, 시, 일, 월, 요일)
    // 매일 오전 0시 0분 0초에 quiz_answer 테이블의 selector 속성을 0으로 초기화 하는 기능
    @Async
    @Scheduled(cron = "0 0 0 * * *")
    public void resetQuizAnswer() {
        logger.info("start resetQuizAnswer - " + new Date());

        try {
            logger.info(quizService.resetQuizAnswer().toString());
        } catch (Exception e) {
            logger.info("reset QuizAnswer Error - " + e);
        }
    }

    // Cron (초, 분, 시, 일, 월, 요일)
//    @Scheduled(cron = "*/5 * * * * *")
//    public void resetWeeklyCountTest() {
//        logger.info("start resetWeeklyCount - " + new Date());
//
//        try {
//            userService.resetWeeklyCount();
//        } catch (Exception e) {
//            logger.info("reset WeeklyCount Error - " + e);
//        }
//    }

}
