package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository {

    void removeUser(String uid);
    User findUserByUid(String uid);

}
