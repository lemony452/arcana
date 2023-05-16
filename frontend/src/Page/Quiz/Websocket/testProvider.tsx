import React, { useRef, useState } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

export default function ConnectAndSub() {
  const client = useRef<CompatClient | null>();
  const [message, setMessage] = useState();

  const connectWs = () => {
    client.current = Stomp.over(() => {
      const sock = new SockJS(`wss://k8d107.p.ssafy.io:18081/ws/websocket`);
      console.log(sock);
      return sock;
    });

    client.current.connect(
      // 유효성 검증 header
      //   {
      //   Authorization: token,
      // },
      {},
      () => {
        // callback 함숭 대부분 header 씀
        client.current!.subscribe(`/sub/channel/quiz`, (mg) => {
          setMessage(JSON.parse(mg.body));
          console.log(message);
        });
      },
    );
  };

  return (
    <button type="button" onClick={connectWs}>
      웹소켓 연결 및 구독하기
    </button>
  );
}
