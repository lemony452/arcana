package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.Quiz;

import java.util.List;

public interface QuizService {
    List<Quiz> getQuizList(int quiznum);
}
