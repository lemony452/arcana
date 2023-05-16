import React, { useRef } from 'react';

const WebSocketContext = React.createContext<any>(null);
export { WebSocketContext };

export default function ({ children }: { children: React.ReactNode }) {
  const webSocketUrl = `ws://k8d107.p.ssafy.io:18081/ws`; // local
  // const webSocketUrl = `wss://k8d107.p.ssafy.io:18081/ws`; // main
  const ws = useRef<WebSocket | null>(null);

  if (!ws.current) {
    ws.current = new WebSocket(webSocketUrl);
    ws.current.onopen = () => {
      console.log(`connected to ${webSocketUrl}`);
      const msg = {
        type: 'enter',
        channel: 'quiz',
        uid: '2790870786',
        data: 'entrance message',
      };
      ws.current?.send(JSON.stringify(msg));
    };

    ws.current.onmessage = (event) => {
      console.log(event.data);
    };

    ws.current.onclose = (error) => {
      console.log(`disconnect from ${webSocketUrl}`);
      console.log(error);
    };
    ws.current.onerror = (error) => {
      console.log(`connection error ${webSocketUrl}`);
      console.log(error);
    };
  }

  return <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>;
}
