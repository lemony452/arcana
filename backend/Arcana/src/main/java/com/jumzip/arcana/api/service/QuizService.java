package com.jumzip.arcana.api.service;

import com.jumzip.arcana.api.request.QuizAnswerRequest;
import com.jumzip.arcana.api.response.QuizAnswerResponse;
import com.jumzip.arcana.db.entity.Quiz;
import com.jumzip.arcana.db.entity.QuizAnswer;
import com.jumzip.arcana.db.entity.QuizList;
import java.util.List;

public interface QuizService {

    Quiz getQuiz(int quizNum);
    List<Quiz> getQuizList();
    QuizList resetQuizList(int quizNum);
    QuizAnswer updateQuizAnswer(QuizAnswerRequest quizAnswerRequest);
    List<QuizAnswerResponse> viewQuizAnswer ();
    List<QuizAnswer> resetQuizAnswer();

}
