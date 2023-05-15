package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.QuizList;

public interface QuizListRepository {

    QuizList findTopQuizListOrderByQuizListIdxDesc();

    void saveQuizList(QuizList quizList);

}
