import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EditProfile from '../../screens/EditProfile';
import Profile from '../../screens/Profile';
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
        name="Edit Profile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bid History"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auction History"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Raffle History"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
