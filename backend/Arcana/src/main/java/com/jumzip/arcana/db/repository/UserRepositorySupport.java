package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.User;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository @Primary
@Transactional
public class UserRepositorySupport implements UserRepository {

    private final EntityManager em;
    public UserRepositorySupport(EntityManager em) {
        this.em = em;
    }

    @Override
    public void saveUser(User user) { em.persist(user); }
    @Override
    public void removeUser(String uid) { em.remove(findUserByUid(uid)); }

    @Override
    public User findUserByUid(String uid) { return em.find(User.class, uid); }

    @Override
    public User findByEmail(String email) {
        TypedQuery<User> query = em.createQuery("SELECT u FROM User u WHERE u.email = :email", User.class);
        query.setParameter("email", email);
        List<User> users = query.getResultList();
        return users.isEmpty() ? null : users.get(0);
    }

    @Override
    public void resetUserWeeklyCount(int weeklyCount) {
        List<User> userList = em.createQuery("select m from User m", User.class)
                .getResultList();

        try {
            for (User user : userList) {
                user.setWeekly_count(weeklyCount);
            }
        } catch (Exception e) {
            // pass
        }
    }

    @Override
    public int updateWeeklyCount(String uid) {
        User user = em.find(User.class, uid);

        int nowValue = user.getWeekly_count();

        if (nowValue > 0) {
            nowValue -= 1;
            user.setWeekly_count(nowValue);
        }

        return nowValue;
    }

    @Override
    public int updateTicket(String uid) {
        User user = em.find(User.class, uid);

        int nowValue = user.getTicket();

        if (nowValue > 0) {
            nowValue -= 1;
            user.setTicket(nowValue);
        }

        return nowValue;
    }

    @Override
    public User updateUserNicknameByUid(String uid, String nickname) {
        User user = em.find(User.class, uid);
        user.setNickname(nickname);

        return user;
    }

    @Override
    public User updateUserTicket(String uid) {
        User user = em.find(User.class, uid);
        user.setTicket(user.getTicket() + 1);

        return user;
    }

}
