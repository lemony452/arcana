package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Quiz;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@Repository @Primary
@Transactional
public class QuizRepositorySupport implements QuizRepository {

    private final EntityManager em;
    public QuizRepositorySupport(EntityManager em) {
        this.em = em;
    }

    @Override
    public List<Quiz> findQuizNum() {
        return em.createQuery("select q from Quiz q", Quiz.class).getResultList();
    }

    @Override
    public Quiz findQuizById(int idx) { return em.find(Quiz.class, idx); }
}
