/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {Platform} from 'react-native';
import tw from 'twrnc';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {useDispatch, useSelector} from 'react-redux';
import {GOOGLE_MAPS_API_KEY} from '@env';
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from '../features/navigation/navSlice';

const Map = () => {
  const dispatch = useDispatch();

  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  useEffect(() => {
    if (!origin || !destination) {
      return;
    } else {
      setTimeout(() => {
        mapRef.current.fitToSuppliedMarkers(
          ['origin', 'destination'],
          {
            edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
          },
          800,
        );
      });
    }
  }, [destination, origin]);

  useEffect(() => {
    if (!origin || !destination) {
      return;
    }
    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`,
      )
        .then(res => res.json())
        .then(data =>
          dispatch(setTravelTimeInformation(data.rows[0].elements[0])),
        );
    };
    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_API_KEY]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType={Platform.OS === 'ios' ? 'mutedStandard' : 'standard'}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};
export {Map};
