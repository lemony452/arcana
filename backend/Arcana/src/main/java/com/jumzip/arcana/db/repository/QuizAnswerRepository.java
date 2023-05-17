package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.QuizAnswer;

public interface QuizAnswerRepository {

    QuizAnswer updateQuizAnswer(int quizIdx, int answerIdx);

//    List<QuizAnswer> findAllQuizAnswer();

}
