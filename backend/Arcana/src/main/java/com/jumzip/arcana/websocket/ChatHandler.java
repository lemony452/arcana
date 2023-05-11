package com.jumzip.arcana.websocket;

import lombok.extern.log4j.Log4j2;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.ArrayList;
import java.util.List;

@Log4j2
public class ChatHandler extends TextWebSocketHandler {

    private List<WebSocketSession> sessionList = new ArrayList<WebSocketSession>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {

        log.info("#ChatHandler, afterConnectionEstablished");
        sessionList.add(session);

        log.info(session.getPrincipal().getName() + "님이 입장하셨습니다.");
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

        log.info("#ChattingHandler, handleMessage");
        log.info(session.getId() + ": " + message);

        for(WebSocketSession s : sessionList) {
            s.sendMessage(new TextMessage(session.getPrincipal().getName() + ":" + message.getPayload()));
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        log.info("#ChattingHandler, afterConnectionClosed");

        sessionList.remove(session);

        log.info(session.getPrincipal().getName() + "님이 퇴장하셨습니다.");
    }
}
