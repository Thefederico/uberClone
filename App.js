import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {AppStack} from './src/navigation/AppStack';
import {store} from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
