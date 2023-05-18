package com.jumzip.arcana.db.entity;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name="report")
@DynamicInsert
public class Report {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "report_idx")
    private int reportIdx;

    private String uid;

    @CreationTimestamp
    private LocalDateTime datetime;

    @Column(name = "card_idx")
    private int cardIdx;

    private String ment;

    @OneToOne
    @JoinColumn(name = "card_idx", insertable = false, updatable = false)
    private Card card;

    @Column(name = "report_question_idx")
    private int reportQuestionIdx;

    @OneToOne
    @JoinColumn(name = "report_question_idx", insertable = false, updatable = false)
    private ReportQuestion reportQuestion;

}
