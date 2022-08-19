import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import {Map} from '../components/Map';
import {NavigateStack} from '../navigation/NavigateStack';

function MapScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={tw`absolute top-16 left-8 z-50 bg-gray-100 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" type="ionicon" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <NavigateStack />
      </View>
    </View>
  );
}

export {MapScreen};
