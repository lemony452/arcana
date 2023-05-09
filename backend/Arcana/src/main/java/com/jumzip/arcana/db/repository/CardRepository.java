package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.TimeCard;
import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
import com.jumzip.arcana.db.entity.TimeCard;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository {

    // CARD 관련 : Read ONLY
    Card findCardByIdx(int card_idx);
    InstantCard findInstantByCardId(int card_idx);
    TimeCard findTimeByCardId(int card_idx);





}
