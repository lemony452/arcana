package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.Quiz;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuizRepository {

    public List<Quiz> findQuizNum();

    public Quiz findQuizById(int idx);
}
