/* eslint-disable */

import React, { useContext, useState } from 'react';
import { WebSocketContext } from './web_socket_provider';
import { userInfoStore } from '../../../../Store/User/info';

function Chatting() {
  const ws = useContext(WebSocketContext);
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    setItems([...items, item]);
  };

  const { user } = userInfoStore();
  const token = user.uid;
  const userInfoShow = () => {
    console.log(user.uid);
  };

  // const stompConnect = () => {
  //   try {
  //     // stomp.debug = 'success';
  //     // 웹소켓 연결시 stomp에서 자동으로 connect이 되었다는것을
  //     // console에 보여주는데 그것을 감추기 위한 debug

  //     ws.current.connect(token, () => {
  //       ws.current.subscribe(
  //         `서버주소`,
  //         (data) => {
  //           const newMessage = JSON.parse(data.body);
  //           // 데이터 파싱
  //         },
  //         token,
  //       );
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <ul>
      {items.map((message) => {
        return <li>{message}</li>;
      })}
    </ul>
  );
}

export default Chatting;
