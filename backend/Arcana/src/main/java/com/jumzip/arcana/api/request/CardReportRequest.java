package com.jumzip.arcana.api.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class CardReportRequest {

    @Schema(example = "0")
    int cardIdx;

    @Schema(example = "card ment")
    String ment;
}
