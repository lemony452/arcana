package com.jumzip.arcana.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class MajorCard {

    @Id
    private Long idx;
    private int num;
    private boolean dir;
    private String keyword;
    private String desc;
    private String karma;

}
