import React from 'react';

import ChatsScreen from '../../../screens/tabs/TabChatsScreen';
import CurrentChat from '../../../screens/tabs/TabChatsScreen/NestedScreens/currentChat';
import BackNavigation from '../../../components/BackNavigation';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
