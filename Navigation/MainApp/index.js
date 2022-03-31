/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import Products from '../Products';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, Image} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Cart from '../../screens/Cart';
import Notifications from '../../screens/Notifications';

import NftMarketplace from '../../screens/NftMarketplace';
import {icons as customIcons} from '../../assets/icons/icons';
import ProfileNavigator from '../ProfileNavigator';
import {useSelector} from 'react-redux';
import CustomTabbarButtom from '../../components/CustomTabbarButton';
const Tab = createBottomTabNavigator();

const MainApp = () => {
  const cart = useSelector(state => state.cart);

  return (
    <React.Fragment>
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
          tabBarLabelStyle: {
            color: 'white',
          },
          contentStyle: {
            backgroundColor: 'white',
          },
          tabBarHideOnKeyboard: true,
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
          options={{
            headerShown: false,
            tabBarBadge: cart.length ? cart.length : null,
          }}
          style={{alignItems: 'center', justifyContent: 'center'}}
        />
        <Tab.Screen
          name="NFT Market"
          component={NftMarketplace}
          options={{
            headerShown: false,
            tabBarHideOnKeyboard: true,

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
                    top: -15,
                  }}
                />
              </View>
            ),
            // tabBarButton: props => <CustomTabbarButtom {...props} />,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{headerShown: false, title: 'Profile', unmountOnBlur: true}}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default MainApp;
