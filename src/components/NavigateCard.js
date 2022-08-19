import React from 'react';
import {View, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import tw from 'twrnc';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {setDestination} from '../features/navigation/navSlice';
import {NavFavorites} from './NavFavorites';

function NavigateCard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Text style={tw`text-center py-5 text-xl text-gray-800`}>
        Good morning
      </Text>
      <View style={tw`flex-shrink border-t border-gray-200`}>
        <View>
          <GooglePlacesAutocomplete
            styles={{
              container: {
                flex: 0,
                paddingTop: 20,
                color: '#333',
              },
              textInput: {
                fontSize: 18,
                backgroundColor: '#dddddf',
                borderRadius: 0,
                color: '#333',
              },
              description: {
                color: '#333',
              },
              textInputContainer: {
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
            }}
            placeholder="Where to?"
            textInputProps={{
              placeholderTextColor: '#333',
              returnKeyType: 'search',
            }}
            debounce={400}
            fetchDetails={true}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'es',
            }}
            enablePoweredByContainer={false}
            returnKeyType={'search'}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }),
                navigation.navigate('RideOptionsCard'),
              );
            }}
          />
        </View>
        <NavFavorites />
      </View>
      <View
        style={tw`flex-row py-2 mt-auto bg-white justify-evenly border-gray-100`}>
        <TouchableOpacity
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
          onPress={() => {
            navigation.navigate('RideOptionsCard');
          }}>
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export {NavigateCard};
