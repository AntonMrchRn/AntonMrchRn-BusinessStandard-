import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import ChatItem from '../../../components/chatComponents/chatsItem';
import Spacer from '../../../components/Spacer';

import styles from './style';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { getChatList } from '../../../redux/slices/chats/actions';
import * as signalR from '@microsoft/signalr';
import { LogLevel } from '@microsoft/signalr';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addMessage } from '../../../redux/slices/chats/chats';

const renderItem = ({ item }: any) => {
  return (
    <>
      <Spacer />
      <ChatItem data={item} />
    </>
  );
};

const ChatsScreen = () => {
  const dispatch = useAppDispatch();
  const dataList = useAppSelector(state => state.chats.list);
  const companyId = useAppSelector(state => state.getDocs.comanyId);

  useEffect(() => {
    dispatch(getChatList(companyId));
  }, [companyId, dispatch]);

  // useEffect(() => {
  //   const connection: any = new signalR.HubConnectionBuilder()
  //     .withUrl('http://bs.yamoguopt.info/messaging', {
  //       transport: signalR.HttpTransportType.WebSockets,
  //       accessTokenFactory: async () => AsyncStorage.getItem('token') as any,
  //     })
  //     .configureLogging(LogLevel.Information)
  //     .withAutomaticReconnect([0, 2000, 10000, 30000])
  //     .build();

  //   connection.on('ReceiveMessage', async (data: any) => {
  //     const resMessage = await JSON.parse(data);
  //     dispatch(addMessage(resMessage));
  //   });

  //   connection.start().then(() => {
  //     console.log('connection', connection.connection);
  //   });
  // }, []);

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.wrapperList}
      renderItem={renderItem}
      data={dataList}
      keyExtractor={item => item.dialogId}
    />
  );
};

export default ChatsScreen;
