package com.jumzip.arcana.db.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class User {

    @Id
    private String uid;
    private String token;
    private String provider;
    private String email;
    private String nickname;
    private int weekly_count;
    private int ticket;
}
