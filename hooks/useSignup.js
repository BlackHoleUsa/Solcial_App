import React, {useState, useRef} from 'react';
import * as yup from 'yup';
import {BASE_URL} from '@env';
const useSignup = navigation => {
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const passwordIconRef = useRef(false);
  console.log(BASE_URL);
  const changePasswordInputIcon = () => {
    passwordIconRef.current = passwordIcon;
    passwordIconRef.current === 'eye'
      ? setPasswordIcon('eye-off')
      : setPasswordIcon('eye');
  };

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
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Required'),
    address: yup.string().required('Required'),
    city: yup.string().required('Required'),
    state: yup.string().required('Required'),
    country: yup.string().required('Required'),
    zipCode: yup.number().required('Required'),
    mobileNumber: yup.number().required('Required'),
  });
  // login form submission

  const handleSignup = values => {
    console.log(values);
    navigation.navigate('Main App');
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    mobileNumber: '',
  };

  return {
    passwordIcon,
    signupValidationSchema,
    DEFAULT_THEME,
    countryCode,
    initialValues,
    onSelect,
    moveToLoginScreen,
    handleSignup,
    changePasswordInputIcon,
  };
};

export default useSignup;
