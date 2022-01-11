import React from 'react';
import {ScrollView, Text, View, KeyboardAvoidingView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import CustomStatusBar from '../../components/CustomStatusBar';
import {styles} from './Styles';
import {Button, TouchableRipple} from 'react-native-paper';
import InputField from '../../components/InputFields';
import CountryPicker from 'react-native-country-picker-modal';

import {Formik} from 'formik';
import useEditProfile from '../../hooks/useEditProfile';
const EditProfile = ({navigation}) => {
  const isFocused = useIsFocused();

  const {
    passwordIcon,
    signupValidationSchema,
    DEFAULT_THEME,
    countryCode,
    initialValues,
    onSelect,

    handleSignup,
    changePasswordInputIcon,
  } = useEditProfile(navigation);

  return (
    <View style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      <KeyboardAvoidingView>
        <ScrollView style={styles.container__main}>
          <View style={styles.container__title}>
            <Text style={styles.text__title}>Edit Profile</Text>
          </View>
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
                      textStyle={styles.textStyle}
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
                      textStyle={styles.textStyle}
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
                  textStyle={styles.textStyle}
                />
                <InputField
                  label="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={passwordIcon === 'eye' ? false : true}
                  icon={passwordIcon}
                  iconColorBlack
                  iconChange={changePasswordInputIcon}
                  errors={errors.password}
                  textStyle={styles.textStyle}
                  inputstyle={{color: 'black'}}
                />
                <InputField
                  label="Address"
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.address}
                  errors={errors.address}
                  inputstyle={styles.inputFields}
                  textStyle={styles.textStyle}
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
                      textStyle={styles.textStyle}
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
                      textStyle={styles.textStyle}
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
                      textStyle={styles.textStyle}
                    />
                  </View>
                  <View style={styles.container__child_2}>
                    <InputField
                      label="Zip Code"
                      onChangeText={handleChange('zipCode')}
                      onBlur={handleBlur('zipCode')}
                      value={values.zipCode}
                      errors={errors.zipCode}
                      inputstyle={styles.inputFields}
                      textStyle={styles.textStyle}
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
                        inputstyle={styles.inputFields}
                        textStyle={styles.textStyle}
                      />
                    </View>
                  </View>
                </View>
                <Button
                  mode="contained"
                  onPress={handleSubmit}
                  style={styles.button__editProfile}
                  // eslint-disable-next-line react-native/no-inline-styles
                  labelStyle={{color: 'white', fontFamily: 'Poppins-Regular'}}>
                  Edit Profile
                </Button>
              </>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default EditProfile;
