package com.jumzip.arcana.api.service;

import com.jumzip.arcana.api.request.UserRegisterRequest;
import com.jumzip.arcana.db.entity.User;

public interface UserService {

    public User getUserData(String uid);
    public User registerUser(UserRegisterRequest userReq);
    public void deleteUser(String uid);
    public boolean searchUser(String email);
    public void resetWeeklyCount();
    
}
