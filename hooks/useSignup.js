import React, {useState} from 'react';
import * as yup from 'yup';
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

  const signupValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  // login form submission

  const handleSignup = values => {
    console.log(values);
    navigation.navigate('Main App');
  };

  const initialValues = {
    fistName: '',
    lastName: '',
    email: '',
    password: '',
    Address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    mobileNumber: '',
  };

  return {
    signupValidationSchema,
    DEFAULT_THEME,
    countryCode,
    initialValues,
    onSelect,
    moveToLoginScreen,
    handleSignup,
  };
};

export default useSignup;
