package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository @Primary
@RequiredArgsConstructor
@Transactional
public class CardRepoSupport implements CardRepo {

    // CARD 관련 : Read ONLY
    @Override
    public Card findById(Long card_idx) {
        return null;
    }

    @Override
    public Card findByName(String name) {
        return null;
    }

    @Override
    public InstantCard findByCardId(Long card_idx) {
        return null;
    }

}
