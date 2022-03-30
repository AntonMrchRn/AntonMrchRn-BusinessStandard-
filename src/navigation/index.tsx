import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigation from './Auth';
import TabNavigation from './App/TabNavigation';

import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login, notLogin } from '../redux/slices/userAuth';

const Stack = createNativeStackNavigator();

function RootNavigate() {
  const isAuth = useAppSelector(state => state.userAuth.isLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          dispatch(Login());
        } else dispatch(notLogin());
      } catch (e) {
        console.log("User didn't login", e);
      }
    };

    checkLogin();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuth ? (
        <Stack.Screen name="AppNavigation" component={TabNavigation} />
      ) : (
        // <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
}

export default RootNavigate;
