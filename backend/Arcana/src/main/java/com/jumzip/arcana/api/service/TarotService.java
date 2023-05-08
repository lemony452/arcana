package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.Card;
import org.springframework.stereotype.Service;

public interface TarotService {

    public Card[] getInstantResult(int cardNum);

}
