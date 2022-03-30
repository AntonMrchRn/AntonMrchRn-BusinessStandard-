import React, { useState } from 'react';
import { Text, View } from 'react-native';

import CustomInput from '../../../components/CustomInput';
import Spacer from '../../../components/Spacer';
import CustomButton from '../../../components/CustomButton';

import styles from './style';
import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchUserAuth } from '../../../redux/slices/userAuth';
import { SvgXml } from 'react-native-svg';
import { xml } from '../../../assets/icons/logo';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpScreen = () => {
  const [email, onChangeLogin] = useState('');
  const [password, onChangePassword] = useState('');

  const error = useAppSelector(state => state.userAuth.status);
  const dispatch = useAppDispatch();
  const onSubmit = () => dispatch(fetchUserAuth({ email, password }));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapperLogo}>
        <SvgXml xml={xml} width="144" height="144" />
      </View>
      <View style={styles.wrapperAuth}>
        <View>
          {error?.error && <Text style={styles.error}>{error?.error}</Text>}
        </View>
        <Spacer size="L" />
        <Spacer size="XS" />
        <CustomInput
          placeholder="Логин"
          type="login"
          email={email}
          onChangeLogin={onChangeLogin}
        />
        <Spacer size="L" />
        <Spacer size="S" />
        <CustomInput
          placeholder="Пароль"
          type="password"
          password={password}
          onChangePassword={onChangePassword}
        />
        <Spacer size="XL" />
        <CustomButton label="Войти" onSubmit={onSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
