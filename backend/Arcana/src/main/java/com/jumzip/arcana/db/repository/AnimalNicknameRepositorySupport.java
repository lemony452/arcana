package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.AnimalNickname;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository @Primary
@Transactional
public class AnimalNicknameRepositorySupport implements AnimalNicknameRepository {

    private final EntityManager em;
    public AnimalNicknameRepositorySupport(EntityManager em) {
        this.em = em;
    }

    @Override
    public AnimalNickname findByAnimalNicknameIdx(int animalNicknameIdx) {
        return em.find(AnimalNickname.class, animalNicknameIdx);
    }

}
