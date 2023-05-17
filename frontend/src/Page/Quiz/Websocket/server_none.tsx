import React, { useState, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { userInfoStore } from '../../../Store/User/info';

function Socket() {
  const sock = new SockJS(`https://k8d107.p.ssafy.io/ws`);
  const stomp = Stomp.over(sock);

  stomp.onConnect = function (frame) {
    // Do something, all subscribes must be done is this callback
    // This is needed because this will be executed after a (re)connect
    console.log(frame);
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
