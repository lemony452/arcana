package com.jumzip.arcana.db.entity;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Getter @Setter
@Entity @Table(name="CARD")
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "dtype")
public abstract class Card {

    @Id
    @Column(name = "card_idx")
    private int idx;
    private String name;
}
