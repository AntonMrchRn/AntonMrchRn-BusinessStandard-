import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Keyboard, View } from 'react-native';
import ChatInput from '../../../../components/chatComponents/chatInput';
import ChatMessage from '../../../../components/chatComponents/chatMessage';
import { ListEmptyChat } from '../../../../components/chatComponents/chatsItem/ListEmptyChat';
import platform from '../../../../helpers/platform';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import {
  getChatList,
  getMessages,
} from '../../../../redux/slices/chats/actions';
import { resetMessagesChat } from '../../../../redux/slices/chats/chats';

import styles from './styles';

const CurrentChat = ({
  route: {
    params: { dialogId, currentUserId },
  },
}) => {
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector(state => state.chats.messagesChat);
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const companyId = useAppSelector(state => state.getDocs.comanyId);

  useEffect(() => {
    dispatch(getMessages(dialogId));

    return () => {
      dispatch(getChatList(companyId));
      dispatch(resetMessagesChat());
    };
  }, [dialogId, dispatch]);

  const onKeyboardShow = (event: any) =>
    setKeyboardOffset(event.endCoordinates.height);
  const onKeyboardHide = () => setKeyboardOffset(0);
  const keyboardDidShowListener = useRef();
  const keyboardDidHideListener = useRef();

  useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener(
      'keyboardWillShow',
      onKeyboardShow
    );
    keyboardDidHideListener.current = Keyboard.addListener(
      'keyboardWillHide',
      onKeyboardHide
    );

    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, [keyboardOffset]);

  const renderItem = ({ item }: any) => {
    return <ChatMessage item={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerChat}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.wrapperList}
          renderItem={renderItem}
          data={messages}
          ListEmptyComponent={ListEmptyChat}
          keyExtractor={item => item.messageId}
        />
      </View>
      <View
        style={{
          paddingBottom: platform.android
            ? keyboardOffset
            : keyboardOffset - 30,
        }}
      >
        <ChatInput dialogId={dialogId} currentUserId={currentUserId} />
      </View>
    </View>
  );
};

export default CurrentChat;
