package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.request.CardReportRequest;
import com.jumzip.arcana.api.request.ReportRequest;
import com.jumzip.arcana.api.service.ReportService;
import com.jumzip.arcana.db.entity.Report;
import com.jumzip.arcana.db.entity.ReportQuestion;
import com.jumzip.arcana.db.repository.ReportQuestionRepository;
import com.jumzip.arcana.db.repository.ReportRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {
    private final Logger logger = LoggerFactory.getLogger(ReportServiceImpl.class);

    private final ReportRepository reportRepo;

    private final ReportQuestionRepository reportQuestionRepo;

    @Transactional
    @Override
    public Boolean saveReport(ReportRequest reportRequest) {
        String uid = reportRequest.getUid();
        List<CardReportRequest> cardReportRequestList = reportRequest.getReports();

        try {
            ReportQuestion reportQuestion = new ReportQuestion();
            reportQuestion.setQuestion(reportRequest.getQuestion());
            reportQuestion.setOptions(reportRequest.getOptions());
            reportQuestion.setSummary(reportRequest.getSummary());
            reportQuestion.setUid(uid);

            ReportQuestion savedReportQuestion = reportQuestionRepo.saveReportQuestion(reportQuestion);
            int reportQuestionIdx = savedReportQuestion.getReportQuestionIdx();
            logger.info("save ReportQuestion");
            logger.info(Integer.toString(reportQuestionIdx));

            for (CardReportRequest reports : cardReportRequestList) {
                Report report = new Report();
                report.setUid(uid);
                report.setCardIdx(reports.getCardIdx());
                report.setMent(reports.getMent());
                report.setReportQuestionIdx(reportQuestionIdx);

                reportRepo.saveReport(report);
            }
            logger.info("save Report");

            return true;
        }
        catch (Exception e) {
            return false;
        }
    }

    @Override
    public List<Report> viewReport(String uid) {
        return reportRepo.findAllByUid(uid);
    }
}
