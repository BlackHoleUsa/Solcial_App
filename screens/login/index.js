/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, KeyboardAvoidingView} from 'react-native';
import {Text, TouchableRipple, Button} from 'react-native-paper';
import BackgroundGradient from '../../components/BackgroundGradient';
import CustomStatusBar from '../../components/CustomStatusBar';
import useLogin from '../../hooks/useLogin';
import {Images} from '../../assets/images';
import InputField from '../../components/InputFields';
import {styles} from './Styles';
import {Formik} from 'formik';
const Login = ({navigation}) => {
  const {
    passwordIcon,
    changePasswordInputIcon,
    handleSignupNavigation,
    handleForogotPasswordNavigation,
  } = useLogin(navigation);

  return (
    <BackgroundGradient>
      <CustomStatusBar backgroundColor="black" barStyle="light-content" />
      <KeyboardAvoidingView style={styles.login__container}>
        <View style={styles.secondary__container}>
          <Image source={Images.websiteLogo} style={{marginTop: 50}} />

          <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.log(values)}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <>
                <InputField
                  label="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  placeholder="example@email.com      "
                />
                <InputField
                  label="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="******       "
                  secureTextEntry={passwordIcon === 'eye' ? false : true}
                  icon={passwordIcon}
                  iconChange={changePasswordInputIcon}
                />
                <Button
                  mode="contained"
                  onPress={handleSubmit}
                  style={styles.login__button}
                  labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
                  Login
                </Button>
              </>
            )}
          </Formik>

          <TouchableRipple
            onPress={handleForogotPasswordNavigation}
            rippleColor="rgba(0, 0, 0, .32)">
            <Text style={styles.forgotpassword__text}>Forgot Password?</Text>
          </TouchableRipple>
        </View>
        <View style={styles.container__signup}>
          <Text style={styles.text__signup}>Don't have an account?</Text>
          <TouchableRipple
            onPress={handleSignupNavigation}
            rippleColor="rgba(0, 0, 0, .32)">
            <Text
              style={styles.text__signup}
              style={{color: 'white', marginLeft: 5}}>
              Sign up
            </Text>
          </TouchableRipple>
        </View>
      </KeyboardAvoidingView>
    </BackgroundGradient>
  );
};

export default Login;
