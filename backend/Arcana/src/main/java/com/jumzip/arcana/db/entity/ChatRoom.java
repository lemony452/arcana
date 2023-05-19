package com.jumzip.arcana.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name="CHATROOM")
public class ChatRoom {

    @Id
    private String roomId;

    private int userCount;

    private String uid;



}
