package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.Quiz;
import com.jumzip.arcana.db.entity.QuizList;
import java.util.List;

public interface QuizService {

    Quiz getQuiz(int quizNum);
    List<Quiz> getQuizList();
    QuizList resetQuizList(int quizNum);

}
