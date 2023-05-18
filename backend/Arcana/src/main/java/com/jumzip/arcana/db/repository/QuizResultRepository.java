package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.QuizResult;
import java.util.List;

public interface QuizResultRepository {

    QuizResult updateQuizResult(int quizIdx, int answerIdx);

    List<QuizResult> findAllQuizResult();

    List<QuizResult> resetQuizResult();

}
