import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {Icon} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

function NavOptions() {
  const navigation = useNavigation();

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          style={tw`w-40 p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2`}
          onPress={() => navigation.navigate(item.screen)}>
          <View>
            <Image
              style={{width: 120, height: 120, resizeMode: 'contain'}}
              source={{uri: item.image}}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`w-10 mt-4 p-2 rounded-full bg-black`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

export {NavOptions};
