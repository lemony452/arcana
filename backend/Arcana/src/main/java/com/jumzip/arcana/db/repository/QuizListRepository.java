package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.QuizList;
import java.util.List;

public interface QuizListRepository {

    List<QuizList> findAllQuizList();

    List<QuizList> saveQuizList(int[] idxList);

}
