package com.jumzip.arcana.websocket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebSocketController {

    @MessageMapping("/message")
    public Message receiveMessage(@Payload Message message){
        return message;
    }

    //기본적으로 @SubscribeMapping 메서드의 반환값은 연결된 클라이언트에게 직접 메시지로 보내지며 브로커를 통과하지 않는다.
    //@SubscribeMapping

    //브로커를 설정하지 않은 경우 SimpMessagingTemplate을 주입받아서 사용하면 된다.
    @Autowired
    private SimpMessagingTemplate template;

    // /chat/message를 구독하고 있는 클라이언트들에게 greetingMessage이 보내지게 될 것이다.
    @RequestMapping("/greetings")
    public void greet(String greetingMessage) {
        template.convertAndSend("/chat/message", greetingMessage);
    }
}