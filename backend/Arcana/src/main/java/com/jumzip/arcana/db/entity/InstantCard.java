package com.jumzip.arcana.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@Entity @Table(name="INSTANT")
@DiscriminatorValue("instant")
public class InstantCard extends Card {

    private String question;
    private String advice;
}
