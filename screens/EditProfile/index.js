import React from 'react';
import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import CustomStatusBar from '../../components/CustomStatusBar';
import {styles} from './Styles';
import {Button} from 'react-native-paper';
import InputField from '../../components/InputFields';
import CountryPicker from 'react-native-country-picker-modal';

import {Formik} from 'formik';
import useEditProfile from '../../hooks/useEditProfile';
const EditProfile = ({navigation}) => {
  const isFocused = useIsFocused();

  const {
    signupValidationSchema,

    editProfileLoader,

    isLoading,
    initialValue,
    handleEditProfile,
  } = useEditProfile(navigation);

  if (!isLoading) {
    console.log(initialValue);
  }

  return (
    <ScrollView style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      <KeyboardAvoidingView>
        {isLoading ? (
          <View style={styles.container__loader}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        ) : (
          <ScrollView style={styles.container__main}>
            <View style={styles.container__title}>
              <Text style={styles.text__title}>Edit Profile</Text>
            </View>
            <Formik
              validationSchema={signupValidationSchema}
              initialValues={initialValue}
              enableReinitialize={true}
              onSubmit={values => handleEditProfile(values)}>
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
                        value={values?.firstName}
                        errors={errors?.firstName}
                        inputstyle={styles.inputFields}
                        textStyle={styles.textStyle}
                      />
                    </View>
                    <View style={styles.container__child_2}>
                      <InputField
                        label="Last Name"
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        value={values?.lastName}
                        errors={errors?.lastName}
                        inputstyle={styles.inputFields}
                        textStyle={styles.textStyle}
                      />
                    </View>
                  </View>

                  <InputField
                    label="Address"
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values?.address}
                    errors={errors?.address}
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
                        value={values?.city}
                        errors={errors?.city}
                        inputstyle={styles.inputFields}
                        textStyle={styles.textStyle}
                      />
                    </View>
                    <View style={styles.container__child_2}>
                      <InputField
                        label="State"
                        onChangeText={handleChange('state')}
                        onBlur={handleBlur('state')}
                        value={values?.state}
                        errors={errors?.state}
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
                        value={values?.country}
                        errors={errors?.country}
                        inputstyle={styles.inputFields}
                        textStyle={styles.textStyle}
                      />
                    </View>
                    <View style={styles.container__child_2}>
                      <InputField
                        label="Zip Code"
                        onChangeText={handleChange('zipCode')}
                        onBlur={handleBlur('zipCode')}
                        value={values?.zipCode}
                        errors={errors?.zipCode}
                        inputstyle={styles.inputFields}
                        textStyle={styles.textStyle}
                      />
                    </View>
                  </View>
                  {/* phone number */}
                  <View style={styles.container__phoneNumber}>
                    <View style={styles.container__countryPicker}>
                      <InputField
                        onChangeText={handleChange('mobileNumber')}
                        onBlur={handleBlur('mobileNumber')}
                        value={values?.mobileNumber}
                        errors={errors.mobileNumber}
                        inputstyle={styles.inputFields}
                        textStyle={styles.textStyle}
                        label="Mobile Phone"
                      />
                    </View>
                  </View>
                  <Button
                    mode="contained"
                    loading={editProfileLoader}
                    onPress={handleSubmit}
                    style={styles.button__editProfile}
                    // eslint-disable-next-line react-native/no-inline-styles
                    labelStyle={{
                      color: 'white',
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Edit Profile
                  </Button>
                </>
              )}
            </Formik>
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EditProfile;
