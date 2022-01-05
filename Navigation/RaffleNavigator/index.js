import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RaffleItemDetail from '../../screens/Raffle/RaffleItemDetail';
import Raffle from '../../screens/Raffle';
const Stack = createNativeStackNavigator();
const RaffleNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Raffle Screen"
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarLabelStyle: {
          color: 'white',
        },
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      })}>
      <Stack.Screen
        name="Raffle Screen"
        component={Raffle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Raffle Item"
        component={RaffleItemDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RaffleNavigator;
