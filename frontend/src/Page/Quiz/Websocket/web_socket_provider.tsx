import React, { useRef } from 'react';

const WebSocketContext = React.createContext<any>(null);
export { WebSocketContext };

export default function ({ children }: { children: React.ReactNode }) {
  const webSocketUrl = `ws://k8d107.p.ssafy.io:18081/ws`;
  const ws = useRef<WebSocket | null>(null);

  if (!ws.current) {
    ws.current = new WebSocket(webSocketUrl);
    ws.current.onopen = () => {
      console.log(`connected to ${webSocketUrl}`);
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
