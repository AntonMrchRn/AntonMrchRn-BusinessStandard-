import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View } from 'react-native';
import CustomButton from '../../../components/authComponents/CustomButton';

import styles from './style';
import { useAppDispatch } from '../../../hooks/useRedux';
import { notLogin } from '../../../redux/slices/userAuth';
import { SvgXml } from 'react-native-svg';
import { xml } from '../../../assets/icons/logo';

const ProfileScreen = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refreshToken');
    dispatch(notLogin());
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <SvgXml xml={xml} width="155" height="155" />
        <CustomButton label="Выход из аккаунта" onSubmit={onSubmit} />
      </View>
    </View>
  );
};

export default ProfileScreen;
