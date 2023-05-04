package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.Card;

public interface TarotService {

    public Card[] getInstantResult(int cardNum);

}
