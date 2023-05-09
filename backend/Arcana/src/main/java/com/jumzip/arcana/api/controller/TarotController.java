package com.jumzip.arcana.api.controller;

import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
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
    @Operation(summary = "instant ALL")
    @GetMapping("instant/{cardNum}")
    public List<InstantCard> GetInstant(@PathVariable int cardNum) {
        List<InstantCard> cardlist = tarotService.getInstantResult(cardNum);

        return cardlist;
    }

    @Operation(summary = "instant TEST")
    @GetMapping("instantone")
    public InstantCard GetInstantOne(@RequestParam int card_idx) {
        InstantCard ic = tarotService.getInstantData(card_idx);

        return ic;
    }

}
