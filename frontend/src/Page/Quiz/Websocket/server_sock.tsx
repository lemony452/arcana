import React, { useState } from 'react';
import * as StompJs from '@stomp/stompjs';
import { userInfoStore } from '../../../Store/User/info';

function Chat() {
  const [id, changeId] = useState('');
  const onChangeId = (event: any) => changeId(event.target.value);
  const [message, changeMessage] = useState('');
  const onChangeMessage = (event: any) => changeMessage(event.target.value);

  const [client, changeClient] = useState<any>();
  const [subscription, changeSubscription] = useState<any>();

  const { user } = userInfoStore();
  const token = user.uid;

  const connect = async () => {
    if (token === '') {
      return;
    }

    const callback = function (res: any) {
      // called when the client receives a STOMP message from the server
      if (res.body) {
        alert(res.body);
      } else {
        alert('got empty message');
      }
    };

    try {
      const clientdata = await new StompJs.Client({
        brokerURL: 'wss://k8d107.p.ssafy.io/ws/websocket',
        // connectHeaders: {
        //   login: id,
        //   passcode: 'password',
        // },
        debug(str) {
          console.log(str);
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
      });

      let subscriptiondata: any;
      clientdata.onConnect = await function () {
        subscriptiondata = clientdata.subscribe('/sub/channel/quiz', callback);
        changeSubscription(subscriptiondata);
      };

      const res = await clientdata.activate();
      console.log(res);
      changeClient(clientdata);
    } catch (error) {
      console.log(error);
    }
  };

  const disConnect = () => {
    if (client === null) {
      return;
    }

    client.deactivate();
  };

  const send = () => {
    if (message === '') {
      return;
    }

    client!.publish({
      destination: '/pub/enter',
      body: JSON.stringify({
        type: 'ENTER',
        uid: token,
        channel: 'quiz',
        data: 'entrance message',
      }),
      headers: { priority: 9 },
    });
  };

  return (
    <div>
      <h1>Chat</h1>
      <input type="text" placeholder="아이디" value={id} onChange={onChangeId} />
      <button type="submit" onClick={connect}>
        접속
      </button>
      <button type="submit" onClick={disConnect}>
        접속 해제
      </button>
      <br />
      <input type="text" placeholder="메시지 보내기" value={message} onChange={onChangeMessage} />
      <button type="submit" onClick={send}>
        메시지 전송
      </button>
    </div>
  );
}

export default Chat;
