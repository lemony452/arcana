package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.Quiz;
import com.jumzip.arcana.db.entity.QuizList;

public interface QuizService {

    Quiz getQuiz(int quizNum);
    QuizList getQuizList();
    QuizList resetQuizList(int quizNum);

}
