import React, { useContext, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import platform from '../../../helpers/platform';
import { ChatContext } from '../../../utils/providerConnection';

import styles from './style';

const ChatInput = ({ currentUserId, dialogId }: any) => {
  const [text, onChangeText] = useState('');
  const { sendMessage } = useContext(ChatContext);

  const user = {
    DialogId: dialogId,
    UserId: currentUserId,
    Text: text,
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnLeft}>
        <SimpleLineIcons
          name="paper-clip"
          size={24}
          color={platform.brandColor}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={value => onChangeText(value)}
        keyboardType={'default'}
        value={text}
        placeholder="Сообщение ..."
        placeholderTextColor={'gray'}
      />
      <TouchableOpacity style={styles.btn} onPress={() => sendMessage(user)}>
        <Ionicons name="send" size={25} color={platform.brandColor} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
