import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import platform from '../../../helpers/platform';
import styles from '../chatsItem/style';

const Avatar = () => {
  return (
    <View style={styles.wrapperAvatar}>
      <Icon name="user" size={30} color={platform.brandColor} />
    </View>
  );
};

export default Avatar;
