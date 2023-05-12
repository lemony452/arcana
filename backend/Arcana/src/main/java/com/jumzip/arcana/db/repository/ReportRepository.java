package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Report;
import java.util.List;

public interface ReportRepository {
    void saveReport(Report report);

    List<Report> findAllByUid(String uid);
}
