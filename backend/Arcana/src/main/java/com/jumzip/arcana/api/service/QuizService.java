package com.jumzip.arcana.api.service;

import com.jumzip.arcana.api.request.QuizRequest;
import com.jumzip.arcana.db.entity.Quiz;
import com.jumzip.arcana.db.entity.QuizList;
import com.jumzip.arcana.db.entity.User;

public interface QuizService {

    Quiz getQuiz(int quizNum);
    QuizList getQuizList();
    QuizList resetQuizList(int quizNum);
    User updateUserTicket(QuizRequest quizRequest);

}
