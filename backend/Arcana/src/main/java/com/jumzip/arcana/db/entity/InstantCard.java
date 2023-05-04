package com.jumzip.arcana.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class InstantCard {

    @Id
    @Column(name="idx")
    private long idx;
    @OneToOne
    @JoinColumn(name="card_idx")
    private Card card;
}
