import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Raffle from '../../screens/Raffle';
import Auction from '../../screens/Auction';
import StoreScreen from '../../screens/StoreScreen';

const Tab = createMaterialTopTabNavigator();
const Products = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator style={{paddingTop: insets.top}}>
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
