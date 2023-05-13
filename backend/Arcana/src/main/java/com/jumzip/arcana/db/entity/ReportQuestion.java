package com.jumzip.arcana.db.entity;

import lombok.Data;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Data
@Entity
@Table(name="report_question")
@DynamicInsert
public class ReportQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "report_question_idx")
    private int reportQuestionIdx;

    private String options;

    private String summary;

    private String question;

    private String uid;
}
