package com.jumzip.arcana.api.service;

import com.jumzip.arcana.db.entity.User;

public interface UserService {

    public User getUserData(String uid);

    public void deleteUser(String uid);
}
