import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import tw from 'twrnc';
import {NavOptions} from '../components/NavOptions';
import {PlacesAutocomplete} from '../components/PlacesAutocomplete';

function HomeScreen() {
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={tw`p-5`}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={{uri: 'https://links.papareact.com/gzs'}}
        />
        <PlacesAutocomplete />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
}

export {HomeScreen};
