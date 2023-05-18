package com.jumzip.arcana.api.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class CountAndTicketRequest {
    @Schema(example = "Weekly")
    String type;
    @Schema(example = "2785092517")
    String uid;

}

