package com.jumzip.arcana.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter
@ToString
@Entity @Table(name = "QUIZ")
public class Quiz {

    @Id
    @Column(name = "quiz_idx")
    private int idx;

    private String content;

    private String answer;

    // 할수있을때 JSON타입으로 고쳐주기...
    private String wrong1;
    private String wrong2;
    private String wrong3;

    @OneToOne
    @JoinColumn(name = "card_idx")
    private Card card;
}
