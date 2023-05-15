package com.jumzip.arcana.db.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="animal_nickname")
public class AnimalNickname {

    @Id
    @Column(name = "animal_nickname_idx")
    private int animalNicknameIdx;

    @Column(name = "animal_nickname")
    private String AnimalNickname;

}
