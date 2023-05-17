package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.QuizAnswer;
import java.util.List;

public interface QuizAnswerRepository {

    QuizAnswer updateQuizAnswer(int quizIdx, int answerIdx);

    List<QuizAnswer> findAllQuizAnswer();

    List<QuizAnswer> resetQuizAnswer();

}
