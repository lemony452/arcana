package com.jumzip.arcana.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter @Setter
@Entity @Table(name="LUCKY")
@DiscriminatorValue("lucky")
public class LuckyCard extends Card {

    private String luckyment;
}
