package com.jumzip.arcana.api.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class QuizRequest {

    @Schema(example = "2785092517")
    String uid;

}
