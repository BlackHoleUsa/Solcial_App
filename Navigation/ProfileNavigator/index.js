import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EditProfile from '../../screens/EditProfile';
import Profile from '../../screens/Profile';
import BidHistory from '../../screens/BidHistory';
import RaffleHistory from '../../screens/RaffleHistory';
import AuctionHistory from '../../screens/AuctionHistory';
const Stack = createNativeStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
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
        name="Profile Screen"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Update Profile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Store History"
        component={BidHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auction History"
        component={AuctionHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Raffle History"
        component={RaffleHistory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
