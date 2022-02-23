/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, TouchableRipple} from 'react-native-paper';
import BackgroundGradient from '../../components/BackgroundGradient';
import InputField from '../../components/InputFields';
import {Formik} from 'formik';
import {styles} from './Styles';

import useSignup from '../../hooks/useSignup';
const Signup = ({navigation}) => {
  const {
    passwordIcon,
    signupValidationSchema,

    initialValues,
    isLoading,

    moveToLoginScreen,
    handleSignup,
    changePasswordInputIcon,
  } = useSignup(navigation);

  return (
    <BackgroundGradient>
      <ScrollView style={styles.container__main}>
        <Text style={styles.text__welcome}>Welocome to SOLEcial app!</Text>

        <Formik
          validationSchema={signupValidationSchema}
          initialValues={initialValues}
          onSubmit={values => handleSignup(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View style={styles.container__grid}>
                <View style={styles.container__child_1}>
                  <InputField
                    label="First Name"
                    selectionColor="white"
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                    errors={errors.firstName}
                    inputstyle={styles.inputFields}
                  />
                </View>
                <View style={styles.container__child_2}>
                  <InputField
                    label="Last Name"
                    selectionColor="white"
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                    errors={errors.lastName}
                    inputstyle={styles.inputFields}
                  />
                </View>
              </View>
              <View style={{marginTop: -15}}>
                <InputField
                  label="Email"
                  selectionColor="white"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  errors={errors.email}
                  keyboardType="email-address"
                  inputstyle={styles.inputFields}
                />
              </View>
              <View style={{marginTop: -15}}>
                <InputField
                  label="Password"
                  selectionColor="white"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={passwordIcon === 'eye' ? false : true}
                  icon={passwordIcon}
                  iconChange={changePasswordInputIcon}
                  errors={errors.password}
                />
              </View>
              <View style={{marginTop: -15}}>
                <InputField
                  label="Address"
                  selectionColor="white"
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                  errors={errors.address}
                  inputstyle={styles.inputFields}
                />
              </View>
              {/* state and city */}
              <View style={styles.container__grid}>
                <View style={styles.container__child_1}>
                  <InputField
                    label="City"
                    selectionColor="white"
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                    errors={errors.city}
                    inputstyle={styles.inputFields}
                  />
                </View>
                <View style={styles.container__child_2}>
                  <InputField
                    label="State"
                    selectionColor="white"
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur('state')}
                    value={values.state}
                    errors={errors.state}
                    inputstyle={styles.inputFields}
                  />
                </View>
              </View>
              {/* country and zip code */}
              <View style={styles.container__grid}>
                <View style={styles.container__child_1}>
                  <InputField
                    label="Country"
                    selectionColor="white"
                    onChangeText={handleChange('country')}
                    onBlur={handleBlur('country')}
                    value={values.country}
                    errors={errors.country}
                    inputstyle={styles.inputFields}
                  />
                </View>
                <View style={styles.container__child_2}>
                  <InputField
                    label="Zip Code"
                    selectionColor="white"
                    onChangeText={handleChange('zipCode')}
                    onBlur={handleBlur('zipCode')}
                    value={values.zipCode}
                    errors={errors.zipCode}
                    keyboardType="numeric"
                    inputstyle={styles.inputFields}
                  />
                </View>
              </View>
              {/* phone number */}
              <View style={styles.container__phoneNumber}>
                <View style={styles.container__countryPicker}>
                  <InputField
                    selectionColor="white"
                    onChangeText={handleChange('mobileNumber')}
                    onBlur={handleBlur('mobileNumber')}
                    value={values.mobileNumber}
                    errors={errors.mobileNumber}
                    inputstyle={styles.inputFields}
                    label="Mobile Phone"
                    placeholder="+18454539249"
                    placeholderColor="#9c8282"
                  />
                </View>
              </View>
              <Button
                mode="contained"
                loading={isLoading}
                onPress={handleSubmit}
                style={styles.signup__button}
                // eslint-disable-next-line react-native/no-inline-styles
                labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
                Sign Up
              </Button>
            </>
          )}
        </Formik>

        {/* already have an account */}
        <View style={styles.container__login}>
          <Text style={styles.text__login}>Already have an account?</Text>
          <TouchableRipple
            onPress={moveToLoginScreen}
            rippleColor="rgba(0, 0, 0, .32)">
            <Text
              style={styles.text__login}
              style={{color: 'white', marginLeft: 5}}>
              Login
            </Text>
          </TouchableRipple>
        </View>
      </ScrollView>
    </BackgroundGradient>
  );
};

export default Signup;
