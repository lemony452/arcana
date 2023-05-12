package com.jumzip.arcana.api.service;

import com.jumzip.arcana.api.request.ReportRequest;
import com.jumzip.arcana.db.entity.InstantCard;
import com.jumzip.arcana.db.entity.LuckyCard;
import com.jumzip.arcana.db.entity.Report;
import com.jumzip.arcana.db.entity.TimeCard;
import java.util.List;

public interface TarotService {

    List<InstantCard> getInstantList(int cardNum);
    InstantCard getInstantData(int card_idx);

    List<TimeCard> getTimeList(int cardNum);


    TimeCard getTimeData(int card_idx);

    LuckyCard getLuckyData();

    Boolean saveReport(ReportRequest reportRequest);

    List<Report> viewReport(String uid);
}
