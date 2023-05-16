/* eslint-disable */

import React, { useContext, useState } from 'react';
import { WebSocketContext } from './web_socket_provider';

function Chatting() {
  const ws = useContext(WebSocketContext);
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    setItems([...items, item]);
  };

  ws.current.onmessage = (evt: MessageEvent) => {
    const data = JSON.parse(evt.data);
    addItem(data.chat);
    console.log(data)
  };

  return (
    <ul>
      {items.map((message) => {
        return <li>{message}</li>;
      })}
    </ul>
  );
}

export default Chatting;
