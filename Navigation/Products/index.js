import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Raffle from '../../screens/Raffle';
import Auction from '../../screens/Auction';
import StoreScreen from '../../screens/StoreScreen';

const Tab = createMaterialTopTabNavigator();
const Products = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarLabelStyle: {
          color: 'white',
        },
      })}>
      <Tab.Screen
        name="Raffle"
        component={Raffle}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Auction"
        component={Auction}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Products;
