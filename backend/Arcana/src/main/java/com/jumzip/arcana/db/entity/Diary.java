package com.jumzip.arcana.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Getter
@Setter
public class Diary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long didx;
    @ManyToOne
    @JoinColumn(name = "uid_user")
    private User user;
    @Column
    private String dcontent;
    @Column
    private Time ddate;

}
