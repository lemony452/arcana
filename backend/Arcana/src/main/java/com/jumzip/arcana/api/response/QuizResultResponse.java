package com.jumzip.arcana.api.response;

import java.util.List;
import lombok.Data;

@Data
public class QuizResultResponse {
    private int quizIdx;
    private List<Integer> answerList;
}
