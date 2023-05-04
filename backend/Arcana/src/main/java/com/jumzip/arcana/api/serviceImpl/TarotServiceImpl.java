package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.service.TarotService;
import com.jumzip.arcana.db.entity.Card;

public class TarotServiceImpl implements TarotService {


    @Override
    public Card[] getInstantResult(int cardNum) {
        Card[] cardlist = new Card[cardNum];

        return new Card[0];
    }
}
