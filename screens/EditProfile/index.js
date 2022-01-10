import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import CustomStatusBar from '../../components/CustomStatusBar';
import {styles} from './Styles';
import {Button, TouchableRipple} from 'react-native-paper';
import InputField from '../../components/InputFields';
import CountryPicker from 'react-native-country-picker-modal';
import useSignup from '../../hooks/useSignup';
const EditProfile = ({navigation}) => {
  const isFocused = useIsFocused();
  const DEFAULT_THEME = {
    primaryColor: '#ccc',
    primaryColorVariant: '#eee',
    backgroundColor: 'white',
    onBackgroundTextColor: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    filterPlaceholderTextColor: '#aaa',
    activeOpacity: 0.7,
    itemHeight: 60,
  };
  const {
    countryCode,

    onSelect,
    moveToLoginScreen,
  } = useSignup(navigation);

  return (
    <View style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      <ScrollView style={styles.container__main}>
        <View style={styles.container__title}>
          <Text style={styles.text__title}>Edit Profile</Text>
        </View>
        <View style={styles.container__grid}>
          <View style={styles.container__child_1}>
            <InputField label="First Name" textStyle={styles.field} />
          </View>
          <View style={styles.container__child_2}>
            <InputField label="Last Name" textStyle={styles.field} />
          </View>
        </View>
        <InputField label="Email" textStyle={styles.field} />
        <InputField label="Password" icon="eye" textStyle={styles.field} />
        <InputField label="Address" textStyle={styles.field} />
        {/* state and city */}
        <View style={styles.container__grid}>
          <View style={styles.container__child_1}>
            <InputField label="City" textStyle={styles.field} />
          </View>
          <View style={styles.container__child_2}>
            <InputField label="State" textStyle={styles.field} />
          </View>
        </View>
        {/* country and zip code */}
        <View style={styles.container__grid}>
          <View style={styles.container__child_1}>
            <InputField label="Country" textStyle={styles.field} />
          </View>
          <View style={styles.container__child_2}>
            <InputField label="Zip Code" textStyle={styles.field} />
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
              <InputField textStyle={styles.field} />
            </View>
          </View>
        </View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Main App')}
          style={styles.signup__button}
          // eslint-disable-next-line react-native/no-inline-styles
          labelStyle={{color: 'white', fontFamily: 'Poppins-Regular'}}>
          Update Profile
        </Button>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
