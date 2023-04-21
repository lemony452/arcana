package com.jumzip.arcana.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class User {

    @Id
    private String uid;
    private String token;
    private String provider;
    private String email;
    private String nickname;
    private int reportCount;

}
