import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import ForgotPassword from '../../screens/ForgotPasswrod';
import MainApp from '../MainApp';

const Stack = createNativeStackNavigator();
const Startup = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
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
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: ' ',
          }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main App"
          component={MainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Startup;
