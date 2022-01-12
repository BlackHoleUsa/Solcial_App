import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import ForgotPassword from '../../screens/ForgotPasswrod';
import MainApp from '../MainApp';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
const Startup = () => {
  const authToken = useSelector(state => state.userInfo.authToken);
  console.log('hello world');
  console.log('auth token', authToken);
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
        {authToken ? (
          <Stack.Screen
            name="Main App"
            component={MainApp}
            options={{headerShown: false}}
          />
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Startup;
