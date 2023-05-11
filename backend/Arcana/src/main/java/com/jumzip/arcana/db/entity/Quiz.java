package com.jumzip.arcana.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Getter @Setter
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
