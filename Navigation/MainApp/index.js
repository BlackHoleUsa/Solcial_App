/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import Products from '../Products';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Cart from '../../screens/Cart';
import Notifications from '../../screens/Notifications';
import Profile from '../../screens/Profile';
import NftMarketplace from '../../screens/NftMarketplace';
import {icons as customIcons} from '../../assets/icons/icons';

const Tab = createBottomTabNavigator();

const CustomTabbarButtom = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.customTabbarButtom}>
      <View style={styles.view__customTabbarButtom}>{children}</View>
    </TouchableOpacity>
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          paddingHorizontal: 5,
          paddingVertical: 5,
          paddingTop: 0,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 0,
        },
        tabBarIcon: ({color, size}) => {
          const icons = {
            Home: 'ios-home-outline',
            Cart: 'ios-cart-outline',
            Notifications: 'ios-notifications-outline',
            Profile: 'ios-person-outline',
          };

          return <Icons name={icons[route.name]} color="white" size={25} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Products}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
        style={{alignItems: 'center', justifyContent: 'center'}}
      />
      <Tab.Screen
        name="NFT Market"
        component={NftMarketplace}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={customIcons.nftmaketplace}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </View>
          ),
          tabBarButton: props => <CustomTabbarButtom {...props} />,
        }}
      />
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

const styles = StyleSheet.create({
  customTabbarButtom: {
    top: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view__customTabbarButtom: {
    width: 75,
    height: 75,
    borderRadius: 37,
    marginHorizontal: 5,
  },
});

export default MainApp;
