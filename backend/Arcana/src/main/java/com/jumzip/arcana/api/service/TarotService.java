package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
import com.jumzip.arcana.db.entity.TimeCard;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TarotService {

    List<InstantCard> getInstantResult(int cardNum);
    InstantCard getInstantData(int card_idx);
}
