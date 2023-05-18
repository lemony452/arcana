package com.jumzip.arcana.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;

@Data
@Entity
@Table(name="quiz_result")
@DynamicInsert
public class QuizResult {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "quiz_result_idx")
    private int quizResultIdx;

    @Column(name = "quiz_idx")
    private int quizIdx;

    @Column(name = "answer_idx")
    private int answerIdx;

    private int selector;

}
