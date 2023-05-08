package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TarotService {

    public List<InstantCard> getInstantResult(int cardNum);

}
