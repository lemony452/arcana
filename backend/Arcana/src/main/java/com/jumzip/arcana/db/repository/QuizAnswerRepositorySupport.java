package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.QuizAnswer;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository @Primary
@Transactional
public class QuizAnswerRepositorySupport implements QuizAnswerRepository {

    private final EntityManager em;
    public QuizAnswerRepositorySupport(EntityManager em) {
        this.em = em;
    }

    @Override
    public QuizAnswer updateQuizAnswer(int quizIdx, int answerIdx) {
        TypedQuery<QuizAnswer> query = em.createQuery("SELECT q FROM QuizAnswer q WHERE q.quizIdx = :quizIdx AND q.answerIdx = :answerIdx", QuizAnswer.class);
        query.setParameter("quizIdx", quizIdx);
        query.setParameter("answerIdx", answerIdx);
        QuizAnswer quizAnswer = query.getSingleResult();
        quizAnswer.setSelector(quizAnswer.getSelector() + 1);

        return quizAnswer;
    }

    @Override
    public List<QuizAnswer> findAllQuizAnswer() {
        return em.createQuery("select q from QuizAnswer q", QuizAnswer.class).getResultList();
    }

}
