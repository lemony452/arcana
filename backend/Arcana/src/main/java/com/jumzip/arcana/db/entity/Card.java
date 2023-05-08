package com.jumzip.arcana.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name="CARD")
public class Card {

    @Id
    @Column(name="card_idx")
    private long card_idx;
    private String name;
}
