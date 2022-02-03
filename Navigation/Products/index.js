import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CustomStatusBar from '../../components/CustomStatusBar';
import {useIsFocused} from '@react-navigation/native';
import {Platform} from 'react-native';
import {fontWeights} from '../../assets/Data';
import StoreNavigator from '../StoreNavigator';
import AuctionNavigator from '../AuctionNavigator';
import RaffleNavigator from '../RaffleNavigator';

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
            fontFamily: 'Poppins-Medium',
            fontWeight: Platform.OS === 'ios' ? fontWeights.medium : 'normal',
            fontSize: 16,
          },
          contentStyle: {
            backgroundColor: 'white',
          },
        })}>
        <Tab.Screen
          name="Raffle"
          component={RaffleNavigator}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Auction"
          component={AuctionNavigator}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Store"
          component={StoreNavigator}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default Products;
