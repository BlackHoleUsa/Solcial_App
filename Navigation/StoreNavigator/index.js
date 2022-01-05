import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StoreScreen from '../../screens/StoreScreen';
import StoreItem from '../../screens/StoreItem';
const Stack = createNativeStackNavigator();
const Startup = () => {
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
        component={StoreItem}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Startup;
