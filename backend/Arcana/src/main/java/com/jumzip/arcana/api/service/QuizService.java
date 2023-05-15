package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.QuizList;

public interface QuizService {
    QuizList getQuizList();
    QuizList resetQuizList(int quizNum);
}
