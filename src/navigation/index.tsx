import React, { useEffect } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigation from './Auth';
import TabNavigation from './App/TabNavigation';

import SplashScreen from 'react-native-splash-screen';
import { useCheckLogin } from '../hooks/useCheckLogin';

const Stack = createNativeStackNavigator();

function RootNavigate() {
  const [checkLogin, isAuth] = useCheckLogin();

  useEffect(() => {
    const checkStack = async () => {
      await checkLogin();
      SplashScreen.hide();
    };
    checkStack();
  }, [checkLogin]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuth ? (
        <Stack.Screen name="AppNavigation" component={TabNavigation} />
      ) : (
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
}

export default RootNavigate;
