package com.jumzip.arcana.db.repository;


import com.jumzip.arcana.db.entity.QuizList;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository @Primary
@Transactional
public class QuizListRepositorySupport implements QuizListRepository {

    private final EntityManager em;
    public QuizListRepositorySupport(EntityManager em) {
        this.em = em;
    }

    @Override
    public QuizList findTopQuizListOrderByQuizListIdxDesc() {
        TypedQuery<QuizList> query = em.createQuery("SELECT q FROM QuizList q", QuizList.class);
        return query.getSingleResult();
    }

    @Override
    public void saveQuizList(QuizList quizList) {
        em.persist(quizList);
    }

}
