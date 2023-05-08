package com.jumzip.arcana.api.controller;

import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.InstantCard;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Tag(description = "타로카드 API", name = "TAROT")
@RestController
@RequestMapping("api/tarot/")
public class TarotController {

    private TarotService tarotService;

    //ResEntity로 변경??
    @Operation(summary = "instant ALL")
    @GetMapping("instant/{cardNum}")
    public List<InstantCard> GetInstant(@PathVariable int cardNum) {
        List<InstantCard> cardlist = tarotService.getInstantResult(cardNum);

        return cardlist;
    }

    //lombok getter안되는듯?
//    @Operation(summary = "instant ALL", description = "BE 테스트용 사용금지")
//    @GetMapping("instant/{cardNum}")
//    public String GetInstantQuestion(@PathVariable int cardNum) {
//        List<InstantCard> cardlist = tarotService.getInstantResult(cardNum);
//        InstantCard card = cardlist.get(0);
//        String q = card.getQuestion();
//        return q;
//    }
//






}
