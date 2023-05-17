package com.jumzip.arcana.api.response;

import java.util.List;
import lombok.Data;

@Data
public class QuizAnswerResponse {
    private int quizIdx;
    private List<Integer> answerList;
}
