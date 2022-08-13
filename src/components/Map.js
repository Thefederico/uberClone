import React from 'react';
import tw from 'twrnc';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => (
  <MapView
    style={tw`flex-1`}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
);
export {Map};
