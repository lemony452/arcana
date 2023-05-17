import * as React from 'react';
// import { ChatRoomPresenter } from './ChatRoomPresenter';
// import '../../scss/ChatContainer.scss';
// import { useEffect, useRef } from 'react';
// import SockJS from 'sockjs-client';
// import Stomp from 'stompjs';
// import { useLocation } from 'react-router-dom';

// let sockJS;
// let stompClient;
// export const ChatRoomContainer = () => {
//   const [contents, setContents] = React.useState('');
//   const [message, setMessage] = React.useState('');
//   const location = useLocation().pathname.split('/');
//   const messagesRef = useRef(null);
//   useEffect(() => {
//     sockJS = new SockJS('주소');
//     stompClient = Stomp.over(sockJS);
//     stompClient.debug = null;
//     stompClient.connect(
//       {},
//       () => {
//         stompClient.subscribe(`/sub/room/${location[2]}`, (data) => {
//           const newMessage = JSON.parse(data.body);
//           addMessage(newMessage);
//         });
//       },
//       (err) => {},
//     );
//     return function cleanup() {
//       stompClient.disconnect();
//     };
//   }, []);
//   useEffect(() => {
//     messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
//   }, [contents]);
//   const handleClick = (contents) => {
//     const sender = `${localStorage.getItem('name')} (${localStorage.getItem('email')})`;
//     const newMessage = {
//       type: 'COMMENT',
//       roomId: location[2],
//       sender,
//       contents,
//     };
//     stompClient.send('/pub/chat', {}, JSON.stringify(newMessage));
//     setMessage('');
//   };
//   const addMessage = (message) => {
//     setContents((prev) => [...prev, message]);
//   };
//   return (
//     <div className="container">
//       <ChatRoomPresenter
//         contents={contents}
//         message={message}
//         setMessage={setMessage}
//         handleClick={handleClick}
//         messagesRef={messagesRef}
//       />
//     </div>
//   );
// };
