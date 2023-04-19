package com.jumzip.arcana.db.entity;

import lombok.Builder;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Builder
public class User {

    @Id
    private String uid;
    private String token;
    private String provider;
    private String email;
    private String nickname;
    private int reportCount;

    public User() {

    }
}
