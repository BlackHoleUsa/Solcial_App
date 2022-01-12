import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, TouchableRipple} from 'react-native-paper';
import BackgroundGradient from '../../components/BackgroundGradient';
import InputField from '../../components/InputFields';
import {Formik} from 'formik';
import {styles} from './Styles';
import CountryPicker from 'react-native-country-picker-modal';
import useSignup from '../../hooks/useSignup';
const Signup = ({navigation}) => {
  const {
    passwordIcon,
    signupValidationSchema,
    DEFAULT_THEME,
    countryCode,
    initialValues,
    onSelect,
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
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                    errors={errors.lastName}
                    inputstyle={styles.inputFields}
                  />
                </View>
              </View>
              <InputField
                label="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                errors={errors.email}
                keyboardType="email-address"
                inputstyle={styles.inputFields}
              />
              <InputField
                label="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={passwordIcon === 'eye' ? false : true}
                icon={passwordIcon}
                iconChange={changePasswordInputIcon}
                errors={errors.password}
              />
              <InputField
                label="Address"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                errors={errors.address}
                inputstyle={styles.inputFields}
              />
              {/* state and city */}
              <View style={styles.container__grid}>
                <View style={styles.container__child_1}>
                  <InputField
                    label="City"
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
                <Text style={styles.text_mobilePhone}>Mobile Phone</Text>
                <View style={styles.container__countryPicker}>
                  <View style={styles.container__countryPicker__1}>
                    <CountryPicker
                      countryCode={countryCode}
                      withFlag
                      withCallingCode
                      withCallingCodeButton
                      onSelect={onSelect}
                      containerButtonStyle={{}}
                      theme={DEFAULT_THEME}
                    />
                  </View>
                  <View style={styles.container__countryPicker__2}>
                    <InputField
                      onChangeText={handleChange('mobileNumber')}
                      onBlur={handleBlur('mobileNumber')}
                      value={values.mobileNumber}
                      errors={errors.mobileNumber}
                      keyboardType="numeric"
                      inputstyle={styles.inputFields}
                    />
                  </View>
                </View>
              </View>
              <Button
                mode="contained"
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
