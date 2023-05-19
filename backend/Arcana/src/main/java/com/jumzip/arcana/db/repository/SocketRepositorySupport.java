package com.jumzip.arcana.db.repository;

import com.jumzip.arcana.db.entity.ChatRoom;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

@Repository
@Primary
@Transactional
public class SocketRepositorySupport implements SocketRepository {

    private final EntityManager em;
    public SocketRepositorySupport(EntityManager em) {
        this.em = em;
    }

    @Override
    public ChatRoom findRoom(String roomId) { return em.find(ChatRoom.class, roomId); }

    @Override
    public int findUserCount(String roomId) {
        return em.createQuery("select c.userCount from ChatRoom c where c.roomId=:roomId", Integer.class)
                .setParameter("roomId", roomId).getSingleResult();
    }

    @Override
    public void plusUserCount(String roomId) {
        em.createQuery("update ChatRoom c set c.userCount = c.userCount+1 where c.roomId=:roomId");
    }

    @Override
    public void minusUserCount(String roomId) {
        em.createQuery("update ChatRoom c set c.userCount = c.userCount-1 where c.roomId=:roomId");
    }

    @Override
    public void saveEnterUser(String uid, String roomId) {

    }

    @Override
    public void removeQuitUser(String uid, String roomId) {

    }
}
