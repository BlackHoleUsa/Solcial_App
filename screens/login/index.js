/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Platform, Image} from 'react-native';
import {Text, TouchableRipple, Button} from 'react-native-paper';
import BackgroundGradient from '../../components/BackgroundGradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import useLogin from '../../hooks/useLogin';
import {Images} from '../../assets/images';
import InputField from '../../components/InputFields';

const Login = ({navigation}) => {
  const {handleSignupNavigation, handleForogotPasswordNavigation} =
    useLogin(navigation);

  return (
    <BackgroundGradient>
      <CustomStatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.login__container}>
        <Image source={Images.websiteLogo} />

        <InputField label="Email" />
        <InputField label="Password" />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Main App')}
          style={styles.login__button}
          labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
          Login
        </Button>
        <TouchableRipple
          onPress={handleForogotPasswordNavigation}
          rippleColor="rgba(0, 0, 0, .32)">
          <Text style={styles.text}>Forgot Password</Text>
        </TouchableRipple>
        <TouchableRipple
          onPress={handleSignupNavigation}
          rippleColor="rgba(0, 0, 0, .32)">
          <Text style={styles.text}>Sign up</Text>
        </TouchableRipple>
      </View>
    </BackgroundGradient>
  );
};

const styles = StyleSheet.create({
  login__container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '600',
    color: 'white',
  },
  input: {
    width: 300,
    backgroundColor: 'black',
    color: 'white ',
  },
  login__button: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
  },
});

export default Login;
