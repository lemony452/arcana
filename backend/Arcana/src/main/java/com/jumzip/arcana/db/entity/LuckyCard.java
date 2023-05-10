package com.jumzip.arcana.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity @Table(name="LUCKY")
public class LuckyCard {

    @Id
    @Column(name = "idx")
    private int idx;

    @OneToOne
    @JoinColumn(name = "card_idx")
    private Card card;

    private String luckyment;
}
