import React, { useState, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { userInfoStore } from '../../../Store/User/info';

// class App extends React.Component {
//   ws: any;

//   componentDidMount() {
//     this.ws = new WebSocket('ws://k8d107.p.ssafy.io:18081/ws'); // 아까 서버에서 1234 port로 했으니 이런식으로
//     this.ws.onopen = () => {
//       // 연결!
//       console.log('connected!!');
//     };
//   }

//   sendMessage = () => {
//     // 화살표함수로 만들것!!
//     this.ws.send('hello this is client Message'); // 서버로 메세지 보내는건 send

//     this.ws.onmessage = (evt: MessageEvent) => {
//       console.log(evt);
//       console.log(evt.data);
//     };
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <button type="button" onClick={this.sendMessage}>
//             메세지 보내기
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

function Socket() {
  let sockJS;
  let stompClient: any;

  const [contents, setContents] = useState('');
  const [message, setMessage] = useState('');
  const messagesRef = useRef<any>();
  const { user } = userInfoStore();
  const token = user.uid;
  const userInfoShow = () => {
    console.log(user.uid);
  };

  useEffect(() => {
    sockJS = new SockJS('https://k8d107.p.ssafy.io:18081/ws');
    stompClient = Stomp.over(sockJS);
    stompClient.debug = null;
    // stompClient.connect(
    //   {},
    //   () => {
    //     stompClient.subscribe(`/sub/channel/quiz}`, (data) => {
    //       const newMessage = JSON.parse(data.body);
    //       addMessage(newMessage);
    //     });
    //   },
    //   (err) => {},
    // );
    return function cleanup() {
      stompClient.disconnect();
    };
  }, []);
  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [contents]);
  const handleClick = () => {
    const newMessage = {
      type: 'enter',
      uid: token,
      channel: 'quiz',
      data: 'enterance message',
    };
    stompClient.send('/pub/enter', {}, JSON.stringify(newMessage));
  };
  // const addMessage = (message) => {
  //   setContents((prev) => [...prev, message]);
  // };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        handleClick
      </button>
    </div>
  );
}

export default Socket;
