package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.ReportQuestion;

public interface ReportQuestionRepository {
    ReportQuestion saveReportQuestion(ReportQuestion reportQuestion);

    ReportQuestion findByUidOrderByReportQuestionIdxDesc(String uid);
}
