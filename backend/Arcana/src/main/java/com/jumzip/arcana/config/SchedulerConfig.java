package com.jumzip.arcana.config;

import com.jumzip.arcana.api.service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@RequiredArgsConstructor
public class SchedulerConfig {
    private final Logger logger = LoggerFactory.getLogger(SchedulerConfig.class);

    private final UserService userService;

    // Cron (초, 분, 시, 일, 월, 요일)
    @Scheduled(cron = "0 0 0 * * 1")
    public void resetWeeklyCount() {
        logger.info("start resetWeeklyCount - " + new Date());

        try {
            userService.resetWeeklyCount();
        } catch (Exception e) {
            logger.info("reset WeeklyCount Error - " + e);
        }
    }

}
