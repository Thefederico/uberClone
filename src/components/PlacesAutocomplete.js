import React from 'react';
import {useDispatch} from 'react-redux';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {setDestination, setOrigin} from '../features/navigation/navSlice';

function PlacesAutocomplete() {
  const dispatch = useDispatch();

  return (
    <GooglePlacesAutocomplete
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 18,
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
    />
  );
}

export {PlacesAutocomplete};
