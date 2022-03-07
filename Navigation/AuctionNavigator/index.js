import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Auction from '../../screens/Auction';

import AuctionItemDetail from '../../screens/Auction/AuctionItemDetail';
import EnterAuction from '../../screens/Auction/EnterAuction';
const Stack = createNativeStackNavigator();
const AuctionNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auction Screen"
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
        contentStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'white',
      })}>
      <Stack.Screen
        name="Auction Screen"
        component={Auction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auction Item"
        component={AuctionItemDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Enter Auction"
        component={EnterAuction}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuctionNavigator;
