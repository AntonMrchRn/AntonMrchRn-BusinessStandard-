import React, { createContext, useEffect } from 'react';
import * as signalR from '@microsoft/signalr';
import { LogLevel } from '@microsoft/signalr';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from '../hooks/useRedux';
import { getMessages } from '../redux/slices/chats/actions';
import { addMessage } from '../redux/slices/chats/chats';

export const ChatContext = createContext({
  connection: null,
  sendMessage: () => {},
});

export const ConnectionChatContextProvider: any = ({ children }: any) => {
  const dispatch = useAppDispatch();

  const connection: any = new signalR.HubConnectionBuilder()
    .withUrl('http://bs.yamoguopt.info/messaging', {
      transport: signalR.HttpTransportType.WebSockets,
      accessTokenFactory: async () => AsyncStorage.getItem('token') as any,
    })
    .configureLogging(LogLevel.Information)
    .withAutomaticReconnect([0, 2000, 10000, 30000])
    .build();

  // Start the connection.
  useEffect(() => {
    connection.start();
    connection.on('ReceiveMessage', (data: any) => {
      dispatch(addMessage(JSON.parse(data)));
    });
  }, []);

  const sendMessage: any = async ({ user, dialogId, onChangeText }: any) => {
    const send = async () => {
      await connection.send('SendMessageMobile', user);
      setTimeout(() => {
        dispatch(getMessages(dialogId));
        onChangeText('');
      }, 100);
    };

    if (connection.state === 'Disconnected') {
      await connection.stop();
      await connection.start();
      send();
    } else {
      send();
    }
  };

  return (
    <ChatContext.Provider value={{ connection, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
