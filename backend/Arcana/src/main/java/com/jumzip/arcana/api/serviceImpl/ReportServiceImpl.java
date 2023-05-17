package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.request.CardReportRequest;
import com.jumzip.arcana.api.request.ReportRequest;
import com.jumzip.arcana.api.response.CardsResponse;
import com.jumzip.arcana.api.response.ReportResponse;
import com.jumzip.arcana.api.service.ReportService;
import com.jumzip.arcana.db.entity.Report;
import com.jumzip.arcana.db.entity.ReportQuestion;
import com.jumzip.arcana.db.repository.ReportQuestionRepository;
import com.jumzip.arcana.db.repository.ReportRepository;
import java.util.ArrayList;
import java.util.List;
import javax.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

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
    public List<ReportResponse> viewReport(String uid) {
        List<Report> reportList = reportRepo.findAllByUidOrderByReportIdxDesc(uid);

        if (reportList == null || reportList.size() == 0) {
            return null;
        }

        List<ReportResponse> reportResponseList = new ArrayList<>();
        Report report = reportList.get(0);
        ReportResponse reportResponse = makeReportResponse(reportList.get(0));
        int beforeReportQuestionIdx = report.getReportQuestionIdx();
        List<CardsResponse> cardsResponseList = new ArrayList<>();

        for (Report nowReport: reportList) {
            int nowReportQuestionIdx = nowReport.getReportQuestionIdx();

            if (beforeReportQuestionIdx == nowReportQuestionIdx) {
                cardsResponseList.add(makeCardsResponse(nowReport));
            }
            else {
                reportResponse.setCardsResponse(cardsResponseList);
                reportResponseList.add(reportResponse);
                reportResponse = makeReportResponse(nowReport);
                cardsResponseList = new ArrayList<>();
                cardsResponseList.add(makeCardsResponse(nowReport));
            }

            beforeReportQuestionIdx = nowReportQuestionIdx;
        }

        reportResponse.setCardsResponse(cardsResponseList);
        reportResponseList.add(reportResponse);

        return reportResponseList;
    }

    private ReportResponse makeReportResponse(Report report) {
        ReportResponse reportResponse = new ReportResponse();

        reportResponse.setReportQuestionIdx(report.getReportQuestionIdx());
        reportResponse.setUid(report.getUid());
        reportResponse.setDatetime(report.getDatetime());
        reportResponse.setOptions(report.getReportQuestion().getOptions());
        reportResponse.setSummary(report.getReportQuestion().getSummary());
        reportResponse.setQuestion(report.getReportQuestion().getQuestion());

        return reportResponse;
    }

    private CardsResponse makeCardsResponse(Report report) {
        CardsResponse cardsResponse = new CardsResponse();
        cardsResponse.setCardIdx(report.getCardIdx());
        cardsResponse.setName(report.getCard().getName());
        cardsResponse.setMent(report.getMent());

        return cardsResponse;
    }
}
