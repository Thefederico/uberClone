import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import tw from 'twrnc';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {setDestination, setOrigin} from '../features/navigation/navSlice';
import {NavOptions} from '../components/NavOptions';
import {NavFavorites} from '../components/NavFavorites';

function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={tw`p-5`}>
        <Image
          style={{width: 100, height: 100, resizeMode: 'contain'}}
          source={{uri: 'https://links.papareact.com/gzs'}}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
              color: '#333',
            },
            textInput: {
              fontSize: 18,
              color: '#333',
            },
            description: {
              color: '#333',
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              }),
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'es',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where from?"
          textInputProps={{
            placeholderTextColor: '#333',
            returnKeyType: 'search',
          }}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
}

export {HomeScreen};
