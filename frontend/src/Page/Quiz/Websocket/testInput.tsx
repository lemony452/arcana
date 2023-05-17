/* eslint-disable */
import React, { useState, useRef } from 'react';
import { CompatClient, Stomp } from '@stomp/stompjs';
// import { WebSocketContext } from './web_socket_provider';
import { userInfoStore } from '../../../Store/User/info';

function TextInputBox() {
  const client = useRef<CompatClient>();
  const [message, setMessage] = useState('');

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
  
    client.current!.send('/pub/enter', {}, JSON.stringify(data));
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
