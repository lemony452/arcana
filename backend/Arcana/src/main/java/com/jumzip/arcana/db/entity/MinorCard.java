package com.jumzip.arcana.db.entity;

import lombok.Builder;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Builder
public class MinorCard {

    @Id
    private Long idx;
    private int symbol;
    private int num;
    private boolean dir;
    private String keyword;
    private String desc;

    public MinorCard() {
        
    }
}
