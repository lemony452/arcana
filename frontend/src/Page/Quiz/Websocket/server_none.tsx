import React, { useState, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import { Client, Stomp } from '@stomp/stompjs';
import { userInfoStore } from '../../../Store/User/info';

function Socket() {
  const sock = new SockJS(`https://arcana.aeoragy.com/ws`);
  const stomp = Stomp.over(sock);
  const { user } = userInfoStore();
  const token = user.uid;

  stomp.onConnect = function (frame) {
    // Do something, all subscribes must be done is this callback
    // This is needed because this will be executed after a (re)connect
    console.log(frame);
    const data = {
      type: 'enter',
      uid: token,
      channel: 'quiz',
      data: 'enterance message',
    };
    stomp.subscribe(
      `/sub/channel/quiz`,
      function (response) {
        console.log(response);
        console.log(JSON.parse(response.body));
      },
      // { id: token },
    );
  };

  stomp.onStompError = function (frame) {
    // Will be invoked in case of error encountered at Broker
    // Bad login/passcode typically will cause an error
    // Complaint brokers will set `message` header with a brief message. Body may contain details.
    // Compliant brokers will terminate the connection after any error
    console.log(`Broker reported error: ${frame.headers.message}`);
    console.log(`Additional details: ${frame.body}`);
  };

  stomp.activate();

  return <h1>communication</h1>;
}

export default Socket;
