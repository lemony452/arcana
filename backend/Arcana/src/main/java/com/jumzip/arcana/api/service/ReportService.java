package com.jumzip.arcana.api.service;

import com.jumzip.arcana.api.request.ReportRequest;
import com.jumzip.arcana.api.response.ReportResponse;

import java.util.List;

public interface ReportService {
    Boolean saveReport(ReportRequest reportRequest);

    List<ReportResponse> viewReport(String uid);

}
