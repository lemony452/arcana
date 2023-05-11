package com.jumzip.arcana.websocket;

import com.jumzip.arcana.db.entity.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Controller
@Log4j2
//@RequestMapping("api/v1/chat/")
@Tag(description = "TEST CHAT API", name = "CHAT")
public class WebSocketController {

    @GetMapping("chat")
    public void chat(Model model) {

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();


        log.info("==================================");
        log.info("@ChatController, GET Chat / Username : " + user.getNickname());

        model.addAttribute("userid", user.getNickname());
    }
}