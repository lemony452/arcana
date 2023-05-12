package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Report;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository @Primary
@Transactional
public class ReportRepositorySupport implements ReportRepository {

    private final EntityManager em;
    public ReportRepositorySupport(EntityManager em) {
        this.em = em;
    }

    @Override
    public void saveReport(Report report) {
        em.persist(report);
    }

    @Override
    public List<Report> findAllByUid(String uid) {
        TypedQuery<Report> query = em.createQuery("SELECT r FROM Report r WHERE r.uid = :uid", Report.class);
        query.setParameter("uid", uid);
        return query.getResultList();
    }

}
