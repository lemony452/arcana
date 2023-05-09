package com.jumzip.arcana.api.controller;

import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
import com.jumzip.arcana.db.entity.TimeCard;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(description = "타로카드 API", name = "TAROT")
@RestController
@RequestMapping("api/tarot/")
@RequiredArgsConstructor
public class TarotController {

    private final TarotService tarotService;

    //ResEntity로 변경??
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

    @Operation(summary = "Time TEST")
    @GetMapping("timeone")
    public TimeCard GetTimeOne(@RequestParam int card_idx) {
        TimeCard tc = tarotService.getTimeData(card_idx);

        return tc;
    }

}
