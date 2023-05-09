package com.jumzip.arcana.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity @Table(name="INSTANT")
public class InstantCard {

    @Id
    @Column(name = "idx")
    private int idx;

    @OneToOne
    @JoinColumn(name = "card_idx")
    private Card card;

    private String question;
    private String advice;
}
