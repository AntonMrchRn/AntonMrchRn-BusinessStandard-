import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Awesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../../../screens/tabs/TabHomeScreen';
import platform from '../../../helpers/platform';
import styles from './style';
import DocsScreen from '../../../screens/tabs/TabDocsScreen';
import ProfileScreen from '../../../screens/tabs/TabProfileScreen';

const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: platform.brandColor,
        tabBarInactiveTintColor: platform.tabBarInactiveColor,
        headerShown: false,
        tabBarLabelStyle: styles.label,
      }}
    >
      <Tab.Screen
        name="Документы"
        component={DocsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="documents" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Компании"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={21} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Сотрудники"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Awesome5 name="people-arrows" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Профиль"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigation;
