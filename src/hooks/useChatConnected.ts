import AsyncStorage from '@react-native-async-storage/async-storage';
import * as signalR from '@microsoft/signalr';
import { LogLevel } from '@microsoft/signalr';
import { useState } from 'react';

export const useChatConnected = () => {
  const [newCon, setNewCon] = useState(null);

  const onConnection = async () => {
    const accessToken: any = await AsyncStorage.getItem('token');

    let connection = new signalR.HubConnectionBuilder()
      .withUrl('http://bs.yamoguopt.info/messaging', {
        transport: signalR.HttpTransportType.LongPolling,
        accessTokenFactory: () => accessToken,
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
    setNewCon(connection);
  };

  const SendMessage = () => {
    console.log('con ===>', newCon);
    // connection.send('SendMessageMobile', user);
  };

  return { onConnection, SendMessage };
};

// const user = {
//   DialogId: 2,
//   UserId: '63bf43de-4caf-435a-845a-4799f68e0021',
//   Text: 'test',
// };
