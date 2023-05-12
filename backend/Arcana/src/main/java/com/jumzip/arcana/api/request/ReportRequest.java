package com.jumzip.arcana.api.request;

import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;
import lombok.Data;

@Data
public class ReportRequest {

    @Schema(example = "abcd123456")
    String uid;


    @ArraySchema(schema = @Schema(implementation = CardReportRequest.class))
    List<CardReportRequest> reports;

}
