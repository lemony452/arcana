import React from 'react';
import ConnectAndSub from './Websocket/testProvider';
import TextInputBox from './Websocket/testInput';

function Test() {
  console.log('websocket test');
  return (
    <>
      <div>웹소켓 테스트 페이지 입니다.</div>
      <ConnectAndSub />
      <TextInputBox />
    </>
  );
}

export default Test;
