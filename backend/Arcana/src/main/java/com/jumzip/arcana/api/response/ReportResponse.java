package com.jumzip.arcana.api.response;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class ReportResponse {
    private int reportQuestionIdx;
    private String uid;
    private LocalDateTime datetime;
    private String options;
    private String summary;
    private String question;
    private List<CardsResponse> cardsResponse;

}
