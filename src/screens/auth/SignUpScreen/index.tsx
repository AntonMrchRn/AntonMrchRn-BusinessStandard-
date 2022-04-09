import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { SvgXml } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux';
import { fetchUserAuth } from '../../../redux/slices/userAuth';
import { xml } from '../../../assets/icons/logo';

import Spacer from '../../../components/Spacer';
import styles from './style';
import CustomInput from '../../../components/authComponents/CustomInput';
import CustomButton from '../../../components/authComponents/CustomButton';

const SignUpScreen = () => {
  const dispatch = useAppDispatch();

  const [email, onChangeLogin] = useState('anna.d.rysina@gmail.com');
  const [password, onChangePassword] = useState('654321');

  const error = useAppSelector(state => state.userAuth.status);
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
        <Spacer size="XL" />
        <CustomInput
          placeholder="Логин"
          type="login"
          email={email}
          onChangeLogin={onChangeLogin}
        />
        <Spacer size="L" />
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
