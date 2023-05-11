package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.User;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Repository @Primary
@Transactional
public class UserRepositorySupport implements UserRepository {

    private final EntityManager em;
    public UserRepositorySupport(EntityManager em) {
        this.em = em;
    }

    @Override
    public void removeUser(String uid) { em.remove(findUserByUid(uid)); }

    @Override
    public User findUserByUid(String uid) { return em.find(User.class, uid); }
}
