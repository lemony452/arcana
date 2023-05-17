package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.QuizResult;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository @Primary
@Transactional
public class QuizResultRepositorySupport implements QuizResultRepository {

    private final EntityManager em;
    public QuizResultRepositorySupport(EntityManager em) {
        this.em = em;
    }

    @Override
    public QuizResult updateQuizResult(int quizIdx, int answerIdx) {
        TypedQuery<QuizResult> query = em.createQuery("SELECT q FROM QuizResult q WHERE q.quizIdx = :quizIdx AND q.answerIdx = :answerIdx", QuizResult.class);
        query.setParameter("quizIdx", quizIdx);
        query.setParameter("answerIdx", answerIdx);
        QuizResult quizAnswer = query.getSingleResult();
        quizAnswer.setSelector(quizAnswer.getSelector() + 1);

        return quizAnswer;
    }

    @Override
    public List<QuizResult> findAllQuizResult() {
        return em.createQuery("select q from QuizResult q", QuizResult.class).getResultList();
    }

    @Override
    public List<QuizResult> resetQuizResult() {
        TypedQuery<QuizResult> query = em.createQuery("select q from QuizResult q", QuizResult.class);
        List<QuizResult> quizResultList = query.getResultList();

        for (QuizResult quizResult : quizResultList) {
            quizResult.setSelector(0);
        }

        return quizResultList;
    }

}
