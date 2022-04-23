import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { store } from '../redux/store';
import RootNavigate from '../navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigate />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
