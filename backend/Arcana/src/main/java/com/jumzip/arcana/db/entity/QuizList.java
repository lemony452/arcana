package com.jumzip.arcana.db.entity;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="quiz_list")
public class QuizList {
    @Id
    @Column(name = "quiz_list_idx")
    private int quizListIdx;

    @CreationTimestamp
    private LocalDateTime datetime;

    @Column(name = "quiz_idx")
    private int quizIdx;

}
