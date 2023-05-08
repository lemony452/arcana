package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepo {

    // CARD 관련 : Read ONLY
    Card findById(Long card_idx);
    Card findByName(String name);

    InstantCard findByCardId(Long card_idx);
}
