package com.jumzip.arcana.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter @Setter
@NoArgsConstructor @RequiredArgsConstructor
@Entity @Table(name="INSTANT")
@DiscriminatorValue("instant")
public class InstantCard extends Card {

    private String question;
    private String advice;
}
