package com.jumzip.arcana.api.serviceImpl;

import com.jumzip.arcana.api.request.UserRegisterRequest;
import com.jumzip.arcana.api.service.UserService;
import com.jumzip.arcana.db.entity.User;
import com.jumzip.arcana.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    private final int WEEKLY_COUNT = 5;

    private final UserRepository userRepo;

    @Override
    public User registerUser(UserRegisterRequest userReq) {
        User user = new User();
        user.setUid(userReq.getUid());
        user.setEmail(userReq.getEmail());
        user.setNickname(userReq.getEmail());
        user.setProvider(userReq.getProvider());
        user.setWeekly_count(WEEKLY_COUNT);

        logger.info("insert user - " + user.toString());

        userRepo.saveUser(user);

        return user;
    }

    @Override
    public User getUserData(String uid) {
        User user = userRepo.findUserByUid(uid);
        return user;
    }

    @Override
    public void deleteUser(String uid) {
        userRepo.removeUser(uid);
    }

    @Override
    public boolean searchUser(String email) {
        User user = userRepo.findByEmail(email);

        if (user == null) {
            return true;
        }
        else {
            return false;
        }
    }

    @Override
    public void resetWeeklyCount() { userRepo.resetUserWeeklyCount(WEEKLY_COUNT); }

    @Override
    public int useWeeklyCount(String uid) {
        return userRepo.updateWeeklyCount(uid);
    }

    @Override
    public int useTicket(String uid) {
        return userRepo.updateTicket(uid);
    }

    @Override
    public User updateUserNickname(String uid, String nickname) {
        return userRepo.updateUserNicknameByUid(uid, nickname);
    }

}
