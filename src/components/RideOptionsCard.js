import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';
import tw from 'twrnc';
import {useSelector} from 'react-redux';
import {selectTravelTimeInformation} from '../features/navigation/navSlice';

const SURGE_CHARGUE_RATE = 1.5;

const data = [
  {
    id: '123',
    title: 'Uber X',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: '456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: '789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

function RideOptionsCard() {
  const navigation = useNavigation();

  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const [selected, setSelected] = useState(null);
  /* const [travelInformation, setTravelInformation] = useState({
    distance:
  }) */

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 p-2 z-50 rounded-full`}
          onPress={() => navigation.navigate('NavigateCard')}>
          <Icon name="chevron-left" type="font-awesome" size={16} />
        </TouchableOpacity>
        <Text style={tw`text-center py-2 text-xl text-gray-800`}>
          Select a ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={tw`flex-row px-10 justify-between items-center ${
              item.id === selected?.id && 'bg-gray-200'
            }`}
            onPress={() => setSelected(item)}>
            <Image
              style={{width: 100, height: 100, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold text-gray-800`}>
                {item.title}
              </Text>
              <Text style={tw`text-gray-800`}>
                {travelTimeInformation?.duration?.text} travel time
              </Text>
            </View>
            <Text style={tw`text-xl text-gray-800`}>
              {new Intl.NumberFormat('es-co', {
                style: 'currency',
                currency: 'COP',
              }).format(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGUE_RATE *
                  item.multiplier) /
                  100,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 ${!selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-xl text-gray-100`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export {RideOptionsCard};
