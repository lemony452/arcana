package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
import org.springframework.stereotype.Service;

public interface TarotService {

    public InstantCard[] getInstantResult(int cardNum);

}
