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

}
