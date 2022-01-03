import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Raffle from '../../screens/Raffle';
import Auction from '../../screens/Auction';
import StoreScreen from '../../screens/StoreScreen';
import CustomStatusBar from '../../components/CustomStatusBar';
import {useIsFocused} from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();
const Products = () => {
  const isFocused = useIsFocused();
  return (
    <React.Fragment>
      {isFocused && (
        <CustomStatusBar backgroundColor="black" barStyle="light-content" />
      )}
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
    </React.Fragment>
  );
};

export default Products;
