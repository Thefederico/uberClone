import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Hello World</Text>
      </View>
    </Provider>
  );
};

export default App;
