package com.jumzip.arcana.api.controller;

import com.jumzip.arcana.api.request.ReportRequest;
import com.jumzip.arcana.api.response.ReportResponse;
import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.InstantCard;
import com.jumzip.arcana.db.entity.LuckyCard;
import com.jumzip.arcana.db.entity.Report;
import com.jumzip.arcana.db.entity.TimeCard;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(description = "타로카드 API", name = "TAROT")
@RestController
@RequestMapping("api/v1/tarot/")
@RequiredArgsConstructor
public class TarotController {
    private final Logger logger = LoggerFactory.getLogger(TarotController.class);

    private final TarotService tarotService;

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
        + " \n logs 내부에 배열형태로 값을 넣어 보내주세요")
    @PostMapping("log")
    public ResponseEntity<?> saveReport(@RequestBody ReportRequest reportRequest) {
        logger.info("start saveTarotLog");

        try {
            if (tarotService.saveReport(reportRequest)) {
                return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
            }
            else {
                return new ResponseEntity<>("FAIL", HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            logger.info("save TarotLog error - " + e.getMessage(), e);

            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }

    @Operation(summary = "Log View", description = "운세 기록을 조회 ")
    @GetMapping("log")
    public ResponseEntity<?> viewReport(@RequestParam String uid) {
        logger.info("start viewReport");

        try {
            List<Report> reports = tarotService.viewReport(uid);
            List<ReportResponse> results = new ArrayList<>();

            for (Report report: reports) {
                ReportResponse result = new ReportResponse();
                result.setUid(report.getUid());
                result.setDatetime(result.getDatetime());
                result.setCardIdx(result.getCardIdx());
                result.setName(result.getName());
                result.setMent(result.getMent());

                results.add(result);
            }

            return new ResponseEntity<>(results, HttpStatus.OK);
        } catch (Exception e) {
            logger.info("view Report error - " + e.getMessage(), e);

            return new ResponseEntity<>("FAIL", HttpStatus.BAD_REQUEST);
        }
    }


}
