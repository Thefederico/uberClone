import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import tw from 'twrnc';
import {NavOptions} from '../components/NavOptions';

function HomeScreen() {
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={tw`p-5`}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={{uri: 'https://links.papareact.com/gzs'}}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

export {HomeScreen};
