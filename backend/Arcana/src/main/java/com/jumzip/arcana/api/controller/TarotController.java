package com.jumzip.arcana.api.controller;

import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.InstantCard;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@Tag(description = "타로카드 API", name = "TAROT")
@RestController
@RequestMapping("api/tarot/")
public class TarotController {

    private TarotService tarotService;

    @Operation(summary = "instant ALL")
    @GetMapping("instant/{cardNum}")
    public InstantCard[] GetInstant(@PathVariable int cardNum) {
        InstantCard[] cardlist = tarotService.getInstantResult(cardNum);

        return cardlist;
    }

    @Operation(summary = "instant question", description = "테스트용")
    @GetMapping("instant/{cardNum}/question")
    public String GetInstantQuestion(@PathVariable int cardNum) {
        InstantCard[] cardlist = tarotService.getInstantResult(cardNum);
        String question = cardlist[0].getQuestion();
        return question;
    }





}
