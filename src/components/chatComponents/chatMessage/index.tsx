import React from 'react';
import { Text, View } from 'react-native';

import 'dayjs/locale/ru';
import dayjs from 'dayjs';

import styles from './style';

interface iChatItem {
  item: {
    isMine: string;
    messageDate: string;
    text: string;
  };
}

const ChatMessage = ({ item: { isMine, messageDate, text } }: iChatItem) => {
  const time = dayjs(messageDate).locale('ru').format('HH:mm, DD MMMM');

  return (
    <View style={isMine ? styles.container : styles.containerHuman}>
      <View
        style={isMine ? styles.wrapperMessageMy : styles.wrapperMessageHuman}
      >
        <Text style={isMine ? styles.textMy : styles.textHuman}>{text}</Text>
      </View>
      <Text style={isMine ? styles.timeMy : styles.timeHuman}>{time}</Text>
    </View>
  );
};

export default ChatMessage;
