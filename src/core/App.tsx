import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import RootNavigate from '../navigation';

const App = () => {
  return (
    <>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigate />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
