package com.jumzip.arcana.api.controller;

import com.jumzip.arcana.api.request.ReportRequest;
import com.jumzip.arcana.api.service.ReportService;
import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.InstantCard;
import com.jumzip.arcana.db.entity.LuckyCard;
import com.jumzip.arcana.db.entity.Report;
import com.jumzip.arcana.db.entity.TimeCard;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(description = "타로카드 API", name = "TAROT")
@RestController
@RequestMapping("api/v1/tarot/")
@RequiredArgsConstructor
public class TarotController {
    private final Logger logger = LoggerFactory.getLogger(TarotController.class);

    private final TarotService tarotService;

    private final ReportService reportService;

    //ResEntity로 변경, try/catch 적용
    @Operation(summary = "instant ALL", description = "인스턴트 스프레드로 읽을 카드를 선택하고, 카드 정보를 반환한다.")
    @GetMapping("instant/{cardNum}")
    public List<InstantCard> GetInstant(@PathVariable int cardNum) {
        List<InstantCard> cardlist = tarotService.getInstantList(cardNum);

        return cardlist;
    }

//    @Operation(summary = "instant TEST")
//    @GetMapping("instantone")
//    public InstantCard GetInstantOne(@RequestParam int card_idx) {
//        InstantCard ic = tarotService.getInstantData(card_idx);
//
//        return ic;
//    }

    @Operation(summary = "Time ALL", description = "기간운 스프레드로 읽을 카드를 선택하고, 카드 정보를 반환한다.")
    @GetMapping("time/{cardNum}")
    public List<TimeCard> GetTime(@PathVariable int cardNum) {
        List<TimeCard> cardlist = tarotService.getTimeList(cardNum);

        return cardlist;
    }

//    @Operation(summary = "Time TEST")
//    @GetMapping("timeone")
//    public TimeCard GetTimeOne(@RequestParam int card_idx) {
//        TimeCard tc = tarotService.getTimeData(card_idx);
//
//        return tc;
//    }


    @Operation(summary = "Lucky", description = "메이저 카드 중 한장을 뽑고, 카드 정보를 반환한다.")
    @GetMapping("lucky")
    public LuckyCard GetLucky() {
        LuckyCard lucky = tarotService.getLuckyData();

        return lucky;
    }

    @Operation(summary = "Log Save", description = "운세 기록을 저장 " 
        + " \n reports 내부에 배열형태로 값을 넣어 보내주세요")
    @PostMapping("log")
    public ResponseEntity<?> saveReport(@RequestBody ReportRequest reportRequest) {
        logger.info("start saveReport");

        try {
            if (reportService.saveReport(reportRequest)) {
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("FAIL", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            logger.info("save Report error - " + e.getMessage(), e);

            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "Log View", description = "운세 기록을 조회 ")
    @Parameter(name = "uid", example = "2785092517")
    @GetMapping("log")
    public ResponseEntity<?> viewReport(@RequestParam String uid) {
        logger.info("start viewReport");

        try {
            List<Report> reports = reportService.viewReport(uid);
            logger.info(reports.toString());

            return new ResponseEntity<>(reports, HttpStatus.OK);
        } catch (Exception e) {
            logger.info("view Report error - " + e.getMessage(), e);

            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

}
