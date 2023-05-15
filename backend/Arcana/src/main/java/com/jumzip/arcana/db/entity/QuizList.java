package com.jumzip.arcana.db.entity;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

@Data
@Entity
@Table(name="quiz_list")
@DynamicInsert
public class QuizList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "quiz_list_idx")
    private int quizListIdx;

    @CreationTimestamp
    private LocalDateTime datetime;

    @Column(name = "quiz0_idx")
    private int quiz0Idx;

    @Column(name = "quiz1_idx")
    private int quiz1Idx;

    @Column(name = "quiz2_idx")
    private int quiz2Idx;

    @Column(name = "quiz3_idx")
    private int quiz3Idx;

    @Column(name = "quiz4_idx")
    private int quiz4Idx;

    @Column(name = "quiz5_idx")
    private int quiz5Idx;

    @Column(name = "quiz6_idx")
    private int quiz6Idx;

    @Column(name = "quiz7_idx")
    private int quiz7Idx;

    @Column(name = "quiz8_idx")
    private int quiz8Idx;

    @Column(name = "quiz9_idx")
    private int quiz9Idx;

}
