package com.jumzip.arcana.api.service;

import com.jumzip.arcana.api.request.QuizResultRequest;
import com.jumzip.arcana.api.response.QuizResultResponse;
import com.jumzip.arcana.db.entity.Quiz;
import com.jumzip.arcana.db.entity.QuizResult;
import com.jumzip.arcana.db.entity.QuizList;
import java.util.List;

public interface QuizService {

    Quiz getQuiz(int quizNum);
    List<Quiz> getQuizList();
    List<QuizList> resetQuizList(int quizNum);
    QuizResult updateQuizResult(QuizResultRequest quizResultRequest);
    List<QuizResultResponse> viewQuizResult();
    List<QuizResult> resetQuizResult();

    int getUserCount(String roomId);
    void plusUserCount(String roomId);
    void minusUserCount(String roomId);
}
