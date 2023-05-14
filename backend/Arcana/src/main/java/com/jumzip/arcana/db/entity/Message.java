package com.jumzip.arcana.db.entity;

import lombok.*;

@Getter @Setter @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Message {
    private String type;
    private String uid;
    private String channel;
    private Object Data;
    private int userCount;

    public void enterQuiz() { this.type = "ENTER"; }
    public void quitQuiz() { this.type = "QUIT"; }
}
