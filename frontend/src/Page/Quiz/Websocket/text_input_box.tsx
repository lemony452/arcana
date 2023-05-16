/* eslint-disable */

import React, { useState, useContext } from 'react';
import { WebSocketContext } from './web_socket_provider';
import { userInfoStore } from '../../../Store/User/info';
import Stomp from 'stompjs';

function TextInputBox() {
  const [message, setMessage] = useState('');
  const ws = useContext(WebSocketContext);

  const handleChangeText = (e: any) => {
    setMessage(e.target.value);
  };

  const { user } = userInfoStore();
  const token = user.uid;
  const userInfoShow = () => {
    console.log(user.uid);
  };

  const handleClickSubmit = () => {
    const data = {
      type: 'enter',
      uid: token,
      channel: "quiz",
      data : "enterance message"
    };
    ws.current.send('/pub/enter', token, JSON.stringify(data));
    console.log(data)
    setMessage('');
  };

  return (
    <div>
      <input type="text" value={message} onChange={handleChangeText} />
      <button type="button" onClick={handleClickSubmit}>
        Send!
      </button>
      <button type="button" onClick={userInfoShow}>
      userInfoShow
      </button>
    </div>
  );
}

export default TextInputBox;
