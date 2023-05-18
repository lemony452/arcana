package com.jumzip.arcana.api.request;

import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.util.List;

@Data
public class ReportRequest {

    @Schema(example = "2785092517")
    String uid;

    @Schema(example = "사랑, 성공 재물 중 1택")
    String options;

    @Schema(example = "결과 요약 문장")
    String summary;

    @Schema(example = "질문 내용")
    String question;

    @ArraySchema(schema = @Schema(implementation = CardReportRequest.class))
    List<CardReportRequest> reports;

}
