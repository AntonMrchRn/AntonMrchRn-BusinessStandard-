import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatsScreen from '../../../screens/tabs/TabChatsScreen';
import CurrentChat from '../../../screens/tabs/TabChatsScreen/NestedScreens/currentChat';
import BackNavigation from '../../../components/BackNavigation';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function ChatsNavigator({ navigation, route }) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === 'CurrentChat') {
      navigation.setOptions({
        tabBarStyle: {
          display: 'none',
        },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Чаты с сотрудниками"
        component={ChatsScreen}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: '500',
          },
        }}
      />
      <Stack.Screen
        name="CurrentChat"
        component={CurrentChat}
        options={{
          header: props => <BackNavigation {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default ChatsNavigator;
