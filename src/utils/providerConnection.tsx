import React, { createContext } from 'react';
import * as signalR from '@microsoft/signalr';
import { LogLevel } from '@microsoft/signalr';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ChatContext = createContext({
  connection: null,
  sendMessage: () => {},
});

export const ConnectionChatContextProvider: any = ({ children }: any) => {
  const connection: any = new signalR.HubConnectionBuilder()
    .withUrl('http://bs.yamoguopt.info/messaging', {
      transport: signalR.HttpTransportType.LongPolling,
      accessTokenFactory: async () => AsyncStorage.getItem('token') as any,
    })
    .configureLogging(LogLevel.Information)
    .withAutomaticReconnect([0, 3000, 5000, 10000, 15000, 30000])
    .build();

  connection.on('ReceiveMessage', data => {
    console.log('ReceiveMessage', data);
  });

  connection.start().then(() => {
    console.log('connection', connection);
  });

  const sendMessage = (user: any) => {
    console.log('con ===>', connection);
    console.log('user ===>', user);

    connection.send('SendMessageMobile', user);
  };
  return (
    <ChatContext.Provider value={{ connection, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
