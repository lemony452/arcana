import React from 'react';
import WebSocketProvider from './web_socket_provider';
import Chatting from './chatting';
// import TextInputBox from './text_input_box';

function Socket() {
  return (
    <div className="Socket">
      <WebSocketProvider>
        <Chatting />
        {/* <TextInputBox /> */}
      </WebSocketProvider>
    </div>
  );
}

export default Socket;
