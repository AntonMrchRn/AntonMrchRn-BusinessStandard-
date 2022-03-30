import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from '../../screens/auth/SignUpScreen';

const Stack = createNativeStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
