import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Navigate from '../navigation/App';
import { store } from '../redux/store';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar />
      <Provider store={store}>
        <NavigationContainer>
          <Navigate />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
