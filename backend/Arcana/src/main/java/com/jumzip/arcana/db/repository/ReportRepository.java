package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Report;
import com.jumzip.arcana.db.entity.User;

public interface ReportRepository {
    void saveReport(Report report);
}
