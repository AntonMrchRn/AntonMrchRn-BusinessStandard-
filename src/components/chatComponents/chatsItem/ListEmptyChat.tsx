import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

export const ListEmptyChat = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        У вас пока нет сообщений с этим пользователем
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height / 1.35,
    paddingHorizontal: 15,
  },
  text: {
    transform: [{ scaleY: -1 }],
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
});
