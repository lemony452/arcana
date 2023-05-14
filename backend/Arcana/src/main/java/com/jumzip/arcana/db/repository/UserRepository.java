package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository {

    void saveUser(User user);
    void removeUser(String uid);
    User findUserByUid(String uid);
    User findByEmail(String email);
    void updateUserWeeklyCount(int weeklyCount);
}
