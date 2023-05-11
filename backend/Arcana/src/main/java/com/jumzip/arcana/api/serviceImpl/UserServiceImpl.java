package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.service.UserService;
import com.jumzip.arcana.db.entity.User;
import com.jumzip.arcana.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepo;

    @Override
    public User getUserData(String uid) {
        User user = userRepo.findUserByUid(uid);
        return user;
    }

    @Override
    public void deleteUser(String uid) {
        userRepo.removeUser(uid);
    }
}
