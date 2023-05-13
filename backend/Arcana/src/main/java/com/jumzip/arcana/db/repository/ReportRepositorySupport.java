package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Report;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

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
    public List<Report> findAllByUidOrderByReportIdxDesc(String uid) {
        TypedQuery<Report> query = em.createQuery("SELECT r FROM Report r WHERE r.uid = :uid ORDER BY reportIdx DESC", Report.class);
        query.setParameter("uid", uid);
        return query.getResultList();
    }

}
