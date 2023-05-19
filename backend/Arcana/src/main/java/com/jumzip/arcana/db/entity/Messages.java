package com.jumzip.arcana.db.entity;

import lombok.*;

@Getter @Setter @Builder
@AllArgsConstructor
@NoArgsConstructor
public class Messages {
    private String type;
    private String uid;
    private String roomId;
    private Object Data;
    private int userCount;

    public void enterQuiz() { this.type = "ENTER"; }
    public void quitQuiz() { this.type = "QUIT"; }
}
