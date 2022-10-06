import { useNavigation } from '@react-navigation/native';
import dayjs from 'dayjs';
import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';
import Avatar from './Avatar';

import styles from './style';

interface iItem {
  data: {
    roleName: string;
    dialogId: number;
    lastMessageDate: string;
    lastMessage: string;
    currentUserId: string;
  };
}

const ChatItem = ({
  data: { roleName, dialogId, lastMessageDate, lastMessage, currentUserId },
}: iItem) => {
  const navigation = useNavigation();
  const time = dayjs(lastMessageDate).locale('ru').format('HH:mm');
  const timeDay = dayjs(lastMessageDate).locale('ru').format('DD MMMM');

  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.5}
      onPress={() =>
        navigation.navigate('CurrentChat', {
          dialogId,
          roleName,
          currentUserId,
        })
      }
    >
      <View style={styles.wrapperContent}>
        <Avatar />
        <View style={styles.wrapperMessages}>
          <Text style={styles.name} numberOfLines={2}>
            {roleName}
          </Text>
          <Text style={styles.text} numberOfLines={2}>
            {lastMessage}
          </Text>
        </View>
      </View>

      <View style={styles.wrapperTime}>
        <Text style={styles.time}>{lastMessageDate && time}</Text>
        <Text style={styles.time}>{lastMessageDate && timeDay}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
