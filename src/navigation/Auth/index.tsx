import React from 'react';

import SignUpScreen from '../../screens/auth/SignUpScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigation;
