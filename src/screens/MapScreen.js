import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import {Map} from '../components/Map';

function MapScreen() {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
}

export {MapScreen};
