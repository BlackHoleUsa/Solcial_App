import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Raffle from '../../screens/Raffle';
import Auction from '../../screens/Auction';
import Store from '../../redux/Store';
const Tab = createMaterialTopTabNavigator();
const Products = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Raffle" component={Raffle} />
      <Tab.Screen name="Auction" component={Auction} />
      <Tab.Screen name="Store" component={Store} />
    </Tab.Navigator>
  );
};

export default Products;
