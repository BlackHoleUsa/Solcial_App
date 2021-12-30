import React from 'react';

import Products from '../Products';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Cart from '../../screens/Cart';
import Notifications from '../../screens/Notifications';
import Profile from '../../screens/Profile';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const icons = {
            Home: 'ios-home-outline',
            Cart: 'ios-cart-outline',
            Notifications: 'ios-notifications-outline',
            Profile: 'ios-person-outline',
          };

          return <Icons name={icons[route.name]} color="black" size={size} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Products}
        options={{headerShown: false}}
      />

      <Tab.Screen name="Cart" component={Cart} options={{headerShown: false}} />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MainApp;
