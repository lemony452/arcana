package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Report;
import javax.persistence.EntityManager;
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

}
