package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Card;
import com.jumzip.arcana.db.entity.InstantCard;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaDelete;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.CriteriaUpdate;
import javax.persistence.metamodel.Metamodel;
import java.util.List;
import java.util.Map;

@Repository @Primary
@RequiredArgsConstructor
public class CardRepositorySupport implements CardRepository {

    private static EntityManager em;

    // CARD 관련 : Read ONLY
     @Override
     public Card findCardByIdx(int card_idx) {
        return em.find(Card.class, card_idx);
     }

    @Override
    public InstantCard findInstantByCardId(int card_idx) {
        return em.find(InstantCard.class, card_idx);
    }





}
