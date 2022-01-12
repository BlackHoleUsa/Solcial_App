import React from 'react';
import {ScrollView, View, KeyboardAvoidingView, Platform} from 'react-native';
import {Button, Text} from 'react-native-paper';
import BackgroundGradient from '../../components/BackgroundGradient';
import InputField from '../../components/InputFields';

import {styles} from './Styles';
import {Formik} from 'formik';
import useForgotPassword from '../../hooks/useForgotPassword';
const ForgotPassword = ({navigation}) => {
  const {
    resetPassword,
    passwordIcon,
    forgotPasswordValidationSchema,
    initialValues,
    changePasswordInputIcon,
    user_email_schema,
    handleForgotPassword,
    handleUserForgotPasswordRequest,
  } = useForgotPassword(navigation);
  return (
    <BackgroundGradient>
      <ScrollView contentContainerStyle={styles.container__main}>
        {resetPassword ? (
          <Formik
            validationSchema={user_email_schema}
            initialValues={{user_email: ''}}
            onSubmit={values => handleUserForgotPasswordRequest(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <InputField
                  label="Email"
                  placeholder="example@email.com      "
                  onChangeText={handleChange('user_email')}
                  onBlur={handleBlur('user_email')}
                  value={values.user_email}
                  errors={errors.user_email}
                />
                <Button
                  mode="contained"
                  onPress={handleSubmit}
                  style={styles.resetpassword__button}
                  labelStyle={{color: 'black', fontFamily: 'Poppins-SemiBold'}}>
                  Forgot Password
                </Button>
              </>
            )}
          </Formik>
        ) : (
          <Formik
            validationSchema={forgotPasswordValidationSchema}
            initialValues={initialValues}
            onSubmit={values => handleForgotPassword(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? null : 'height'}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <InputField
                  label="Email"
                  placeholder="example@email.com      "
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  errors={errors.email}
                />
                <Text style={styles.text__otp}>
                  Enter the OTP sent to your email
                </Text>
                <View style={styles.container__otp}>
                  <View style={styles.input}>
                    <InputField
                      placeholder=" "
                      onChangeText={handleChange('otp1')}
                      onBlur={handleBlur('otp1')}
                      value={values.otp1}
                      errors={errors.otp1}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.input}>
                    <InputField
                      placeholder=" "
                      onChangeText={handleChange('otp2')}
                      onBlur={handleBlur('otp2')}
                      value={values.otp2}
                      errors={errors.otp2}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.input}>
                    <InputField
                      placeholder=" "
                      onChangeText={handleChange('otp3')}
                      onBlur={handleBlur('otp3')}
                      value={values.otp3}
                      errors={errors.otp3}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.input}>
                    <InputField
                      placeholder=" "
                      onChangeText={handleChange('otp4')}
                      onBlur={handleBlur('otp4')}
                      value={values.otp4}
                      errors={errors.otp4}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <InputField
                  label="Create New Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="******       "
                  secureTextEntry={passwordIcon === 'eye' ? false : true}
                  icon={passwordIcon}
                  iconChange={changePasswordInputIcon}
                  errors={errors.password}
                />
                <Button
                  mode="contained"
                  onPress={handleSubmit}
                  style={styles.resetpassword__button}
                  labelStyle={{color: 'black', fontFamily: 'Poppins-SemiBold'}}>
                  Reset Password
                </Button>
              </KeyboardAvoidingView>
            )}
          </Formik>
        )}
      </ScrollView>
    </BackgroundGradient>
  );
};

export default ForgotPassword;
