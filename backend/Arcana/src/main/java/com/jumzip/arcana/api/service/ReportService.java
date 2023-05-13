package com.jumzip.arcana.api.service;

import com.jumzip.arcana.api.request.ReportRequest;
import com.jumzip.arcana.db.entity.Report;

import java.util.List;

public interface ReportService {
    Boolean saveReport(ReportRequest reportRequest);

    List<Report> viewReport(String uid);

}
