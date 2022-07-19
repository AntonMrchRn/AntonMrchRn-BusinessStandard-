import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Keyboard, View } from 'react-native';
import ChatInput from '../../../../components/chatComponents/chatInput';
import ChatMessage from '../../../../components/chatComponents/chatMessage';
import { ListEmptyChat } from '../../../../components/chatComponents/chatsItem/ListEmptyChat';
import platform from '../../../../helpers/platform';
import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { getMessages } from '../../../../redux/slices/chats/actions';

import styles from './styles';

const CurrentChat = ({
  route: {
    params: { dialogId },
  },
}) => {
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector(state => state.chats.messagesChat);
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    dispatch(getMessages(dialogId));
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
        <ChatInput />
      </View>
    </View>
  );
};

export default CurrentChat;
