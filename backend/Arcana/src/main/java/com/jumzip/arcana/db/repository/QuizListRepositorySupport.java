package com.jumzip.arcana.db.repository;


import com.jumzip.arcana.db.entity.QuizList;
import java.util.List;
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
    public List<QuizList> findAllQuizList() {
        TypedQuery<QuizList> query = em.createQuery("SELECT q FROM QuizList q", QuizList.class);
        List<QuizList> quizList = query.getResultList();

        return quizList;
    }

    @Override
    public List<QuizList> saveQuizList(int[] idxList) {
        TypedQuery<QuizList> query = em.createQuery("SELECT q FROM QuizList q", QuizList.class);
        List<QuizList> quizLists = query.getResultList();

        for (int i = 0; i < idxList.length; i++) {
            QuizList quizList = quizLists.get(i);
            quizList.setQuizIdx(idxList[i]);
        }

        return quizLists;
    }

}
