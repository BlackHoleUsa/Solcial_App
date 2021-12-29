import React from 'react';

import Products from '../Products';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View} from 'react-native';

import Cart from '../../screens/Cart';
import Notifications from '../../screens/Notifications';
import Profile from '../../screens/Profile';
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Products} />

      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainApp;
