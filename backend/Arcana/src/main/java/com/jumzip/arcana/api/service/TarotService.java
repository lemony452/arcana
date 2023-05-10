package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
import com.jumzip.arcana.db.entity.LuckyCard;
import com.jumzip.arcana.db.entity.TimeCard;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TarotService {

    List<InstantCard> getInstantList(int cardNum);
    InstantCard getInstantData(int card_idx);

    List<TimeCard> getTimeList(int cardNum);


    TimeCard getTimeData(int card_idx);

    LuckyCard getLuckyData();
}
