import React, {useState} from 'react';

const useSignup = navigation => {
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  // theme for mobile code picker
  const DEFAULT_THEME = {
    primaryColor: '#ccc',
    primaryColorVariant: '#eee',
    backgroundColor: 'black',
    onBackgroundTextColor: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    filterPlaceholderTextColor: '#aaa',
    activeOpacity: 0.7,
    itemHeight: 60,
  };
  const onSelect = country => {
    setCountryCode(country.cca2);
    setCountry(country);
  };
  const moveToLoginScreen = () => {
    navigation.navigate('Login');
  };
  return {
    DEFAULT_THEME,
    countryCode,
    setCountryCode,
    setCountry,
    onSelect,
    moveToLoginScreen,
  };
};

export default useSignup;
