import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StoreScreen from '../../screens/StoreScreen';
import StoreItemDetail from '../../screens/StoreScreen/StoreItemDetail';
const Stack = createNativeStackNavigator();
const StoreNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Store Screen"
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarLabelStyle: {
          color: 'white',
        },
        contentStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      })}>
      <Stack.Screen
        name="Store Screen"
        component={StoreScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Store Item"
        component={StoreItemDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StoreNavigator;
