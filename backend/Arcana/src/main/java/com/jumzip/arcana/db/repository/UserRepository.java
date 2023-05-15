package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository {

    void saveUser(User user);
    void removeUser(String uid);
    User findUserByUid(String uid);
    User findByEmail(String email);
    void resetUserWeeklyCount(int weeklyCount);
    int updateWeeklyCount(String uid);
    int updateTicket(String uid);
    User updateUserNicknameByUid(String uid, String nickname);
    User updateUserTicket(String uid);

}
