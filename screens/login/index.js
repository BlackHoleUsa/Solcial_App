import React from 'react';
import {View, StyleSheet, Platform, Image} from 'react-native';
import {Text, TouchableRipple, Button} from 'react-native-paper';
import BackgroundGradient from '../../components/BackgroundGradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import useLogin from '../../hooks/useLogin';
import {Images} from '../../assets/images';
const Login = ({navigation}) => {
  const {handleSignupNavigation, handleForogotPasswordNavigation} =
    useLogin(navigation);

  return (
    <BackgroundGradient>
      <CustomStatusBar backgroundColor="black" barStyle="light-content" />
      <Image source={Images.websiteLogo} />
      <Text style={styles.text}>Login screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Main App')}>
        Main App
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
    </BackgroundGradient>
  );
};

const styles = StyleSheet.create({
  login__container: {
    backgroundColor: 'yellow',
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-ExtraBold',
    fontWeight: '600',
    color: 'white',
  },
});

export default Login;
