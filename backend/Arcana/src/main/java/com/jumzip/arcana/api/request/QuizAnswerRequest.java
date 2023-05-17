package com.jumzip.arcana.api.request;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class QuizAnswerRequest {

    @Schema(example = "1")
    int quizIdx;
    @Schema(example = "1")
    int answerIdx;

}
