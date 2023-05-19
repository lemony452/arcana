package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.ChatRoom;

public interface SocketRepository {

    ChatRoom findRoom(String roomId);
    int findUserCount(String roomId);

    void plusUserCount(String roomId);
    void minusUserCount(String roomId);

    void saveEnterUser(String uid, String roomId);
    void removeQuitUser(String uid, String roomId);
}
