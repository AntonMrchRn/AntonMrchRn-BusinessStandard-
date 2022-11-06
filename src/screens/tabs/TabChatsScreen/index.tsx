import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import ChatItem from '../../../components/chatComponents/chatsItem';
import Spacer from '../../../components/Spacer';

import styles from './style';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { getChatList } from '../../../redux/slices/chats/actions';

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
