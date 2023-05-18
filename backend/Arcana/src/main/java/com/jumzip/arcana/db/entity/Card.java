package com.jumzip.arcana.db.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Getter @Setter
@Entity @Table(name="CARD")
public class Card {

    @Id
    @Column(name = "card_idx")
    private int idx;
    private String name;
}
