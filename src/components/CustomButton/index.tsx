import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import styles from './style';

interface iCutomButton {
  label: string;
  onSubmit: any;
}

const CustomButton = ({ label, onSubmit }: iCutomButton) => {
  return (
    <TouchableOpacity
      style={styles.input}
      activeOpacity={0.5}
      onPress={() => onSubmit()}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
