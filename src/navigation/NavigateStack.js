import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigateCard} from '../components/NavigateCard';
import {RideOptionsCard} from '../components/RideOptionsCard';

const Stack = createNativeStackNavigator();

function NavigateStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NavigateCard"
        component={NavigateCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RideOptionsCard"
        component={RideOptionsCard}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export {NavigateStack};
