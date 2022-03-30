import React, { useState } from 'react';

import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useAppSelector } from '../../hooks/useRedux';

import { iCustomInput } from './interface';
import styles from './style';

const CustomInput = ({
  placeholder,
  type,
  email,
  password,
  onChangeLogin,
  onChangePassword,
  ...props
}: iCustomInput) => {
  const [focusLogin, setFocusLogin] = useState(false);
  const [showIcon, setShowIcons] = useState(true);
  const error = useAppSelector(state => state.userAuth.status);
  console.log(error);

  return (
    <View style={styles.container}>
      {type === 'login' ? (
        <>
          <TextInput
            style={focusLogin ? styles.activeInput : styles.input}
            onChangeText={value => onChangeLogin?.(value)}
            value={email}
            placeholder={placeholder}
            placeholderTextColor={'gray'}
            onFocus={() => setFocusLogin(true)}
            onEndEditing={() => setFocusLogin(false)}
            {...props}
          />
        </>
      ) : (
        <>
          <TextInput
            style={focusLogin ? styles.activeInput : styles.input}
            onChangeText={value => onChangePassword?.(value)}
            value={password}
            placeholder={placeholder}
            placeholderTextColor={'gray'}
            secureTextEntry={showIcon}
            maxLength={10}
            onFocus={() => setFocusLogin(true)}
            onEndEditing={() => setFocusLogin(false)}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setShowIcons(!showIcon)}
          >
            {!showIcon ? (
              <Icon name="eye" size={25} color="#000" />
            ) : (
              <Icon name="eye-with-line" size={25} color="#000" />
            )}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default CustomInput;
