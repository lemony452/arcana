package com.jumzip.arcana.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter

public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long ridx;
    @ManyToOne
    @JoinColumn(name = "didx_diary")
    private Diary diary;

    @ManyToOne
    @JoinColumn(name = "uid_user")
    private User user;

    @Column
    private int[] card_num;
    @Column
    private String[] card_res;
    @Column
    private String question;
    @Column
    private String answer;


}
