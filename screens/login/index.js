/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, KeyboardAvoidingView, ScrollView} from 'react-native';
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
    isLoading,
    passwordIcon,
    loginValidationSchema,
    changePasswordInputIcon,
    handleSignupNavigation,
    handleForogotPasswordNavigation,
    handleLogin,
  } = useLogin(navigation);

  return (
    <BackgroundGradient>
      <CustomStatusBar backgroundColor="black" barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.login__container}>
        <View style={styles.secondary__container}>
          <Image source={Images.websiteLogo} style={{marginTop: 50}} />

          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{email: '', password: ''}}
            onSubmit={values => handleLogin(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <View style={{marginTop: -15}}>
                  <InputField
                    label="Email"
                    selectionColor="white"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    placeholder="example@email.com      "
                    errors={errors.email}
                  />
                </View>
                <View style={{marginTop: -15}}>
                  <InputField
                    label="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="******       "
                    selectionColor="white"
                    secureTextEntry={passwordIcon === 'eye' ? false : true}
                    icon={passwordIcon}
                    iconChange={changePasswordInputIcon}
                    errors={errors.password}
                  />
                </View>

                <Button
                  mode="contained"
                  loading={isLoading}
                  onPress={handleSubmit}
                  style={styles.login__button}
                  labelStyle={{
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                  }}>
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
      </ScrollView>
    </BackgroundGradient>
  );
};

export default Login;
