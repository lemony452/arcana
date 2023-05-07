package com.jumzip.arcana.api.controller;

import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.Card;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Tag(description = "타로카드 API", name = "TAROT")
@RestController
@RequestMapping("api/tarot/")
public class TarotController {

    private TarotService tarotService;

    // 선택지1. 1개의 인스턴트 api에 선택 int 넣어서 부르기
    @Operation(summary = "instant ALL")
    @GetMapping("instant")
    public Card[] GetInstant(@RequestParam int cardNum) {
        Card[] cardlist = tarotService.getInstantResult(cardNum);

        return cardlist;
    }

    // 선택지2. api 2개
    @Operation(summary = "instant 2way")
    @GetMapping("instant/two")
    public Card[] GetTwoWay() {
        Card[] cardlist = new Card[3];

        return cardlist;
    }

    @Operation(summary = "instant 3way")
    @GetMapping("instant/three")
    public Card[] GetThreeWay() {
        Card[] cardlist = new Card[4];

        return cardlist;
    }



}
