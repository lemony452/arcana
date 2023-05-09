package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
import com.jumzip.arcana.db.entity.TimeCard;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import javax.transaction.Transactional;


@Repository @Primary
@Transactional
public class CardRepositorySupport implements CardRepository {

    private final EntityManager em;
    public CardRepositorySupport(EntityManager em) {
        this.em = em;
    }


    // CARD 관련 : Read ONLY
     @Override
     public Card findCardByIdx(int card_idx) {
        return em.find(Card.class, card_idx);
     }

    @Override
    public InstantCard findInstantByCardId(int card_idx) {
        return em.find(InstantCard.class, card_idx);
    }

    @Override
    public TimeCard findTimeByCardId(int card_idx) { return em.find(TimeCard.class, card_idx); }


}
