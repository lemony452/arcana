package com.jumzip.arcana.api.response;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class ReportResponse {
    private int reportIdx;
    private String uid;
    private LocalDateTime datetime;
    private int cardIdx;
    private String ment;
    private String name;
}
