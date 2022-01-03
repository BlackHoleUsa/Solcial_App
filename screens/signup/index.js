import React, {useState, useRef} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, TouchableRipple} from 'react-native-paper';
import BackgroundGradient from '../../components/BackgroundGradient';
import InputField from '../../components/InputFields';

import {styles} from './Styles';
import CountryPicker from 'react-native-country-picker-modal';
import useSignup from '../../hooks/useSignup';
const Signup = ({navigation}) => {
  const {DEFAULT_THEME} = useSignup(navigation);
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);
  // eslint-disable-next-line no-shadow
  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  return (
    <BackgroundGradient>
      <ScrollView style={styles.container__main}>
        <Text style={styles.text__welcome}>Welocome to SOLEcial app!</Text>
        <View style={styles.container__grid}>
          <View style={styles.container__child_1}>
            <InputField label="First Name" />
          </View>
          <View style={styles.container__child_2}>
            <InputField label="Last Name" />
          </View>
        </View>
        <InputField label="Email" />
        <InputField label="Password" icon="eye" />
        <InputField label="Address" />
        {/* state and city */}
        <View style={styles.container__grid}>
          <View style={styles.container__child_1}>
            <InputField label="City" />
          </View>
          <View style={styles.container__child_2}>
            <InputField label="State" />
          </View>
        </View>
        {/* country and zip code */}
        <View style={styles.container__grid}>
          <View style={styles.container__child_1}>
            <InputField label="Country" />
          </View>
          <View style={styles.container__child_2}>
            <InputField label="Zip Code" />
          </View>
        </View>
        {/* phone number */}
        <View style={styles.container__phoneNumber}>
          <Text style={styles.text_mobilePhone}>Mobile Phone</Text>
          <CountryPicker
            countryCode={countryCode}
            withFlag
            withCallingCode
            withCallingCodeButton
            onSelect={onSelect}
            containerButtonStyle={{}}
            theme={DEFAULT_THEME}
          />

          {/* ...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              withEmoji,
              onSelect,
            } */}
        </View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Main App')}
          style={styles.signup__button}
          // eslint-disable-next-line react-native/no-inline-styles
          labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
          Sign Up
        </Button>
        {/* already have an account */}
        <View style={styles.container__login}>
          <Text style={styles.text__login}>Already have an account?</Text>
          <TouchableRipple onPress={() => {}} rippleColor="rgba(0, 0, 0, .32)">
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
