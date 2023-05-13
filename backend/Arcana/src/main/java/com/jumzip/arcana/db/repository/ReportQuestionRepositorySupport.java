package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.ReportQuestion;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

@Repository @Primary
@Transactional
public class ReportQuestionRepositorySupport implements ReportQuestionRepository {

    private final EntityManager em;

    public ReportQuestionRepositorySupport(EntityManager em) {
        this.em = em;
    }

    @Override
    public ReportQuestion saveReportQuestion(ReportQuestion reportQuestion) {
        em.persist(reportQuestion);
        return reportQuestion;
    }

    @Override
    public ReportQuestion findByUidOrderByReportQuestionIdxDesc(String uid) {
        TypedQuery<ReportQuestion> query = em.createQuery("SELECT r FROM Report r WHERE r.uid = :uid", ReportQuestion.class);
        query.setParameter("uid", uid);
        return query.getSingleResult();
    }
}
