package com.jumzip.arcana.db.entity;

import lombok.Builder;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Time;

@Entity
@Builder
public class Diary {

    @Id
    private Long didx;
    private String uid;
    private String dcontent;
    private Time ddate;

    public Diary() {

    }
}
