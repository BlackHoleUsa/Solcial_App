import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import ForgotPassword from '../../screens/ForgotPasswrod';
import MainApp from '../MainApp';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
const Startup = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
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
