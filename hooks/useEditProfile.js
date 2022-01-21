import React, {useState, useRef, useEffect} from 'react';
import * as yup from 'yup';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {API_URL, apiRoutes} from '../utilities/apiRoutes';
import {Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
const useEditProfile = navigation => {
  const [countryCode, setCountryCode] = useState('FR');
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const isFocused = useIsFocused();
  const passwordIconRef = useRef(false);
  const userInfo = useSelector(state => state.userInfo);
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
    backgroundColor: 'white',
    onBackgroundTextColor: 'black',
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

  const signupValidationSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    address: yup.string().required('Required'),
    city: yup.string().required('Required'),
    state: yup.string().required('Required'),
    country: yup.string().required('Required'),
    zipCode: yup.number().typeError('Number Required').required('Required'),
    mobileNumber: yup
      .number()
      .typeError('Number Required')
      .required('Required'),
  });
  // login form submission

  const handleSignup = values => {
    navigation.navigate('Main App');
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    mobileNumber: '',
  };

  const handleGetUserData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${API_URL}${apiRoutes.users}${userInfo.id}`,

        {
          headers: {Authorization: `Bearer ${userInfo.token}`},
        },
      );
      if (response.status === 200) {
        setIsLoading(false);
        console.log(response);
      }
    } catch (error) {
      setIsLoading(false);
      if (error) {
        Alert.alert(
          'Error',
          `${error.response.data.message}`,
          [
            {
              text: 'Ok',

              style: 'cancel',
            },
          ],
          {
            cancelable: true,
          },
        );
      }
    }
  };

  useEffect(() => {
    handleGetUserData();
  }, [isFocused]);

  return {
    passwordIcon,
    signupValidationSchema,
    DEFAULT_THEME,
    countryCode,
    initialValues,
    onSelect,
    isLoading,
    handleSignup,
    changePasswordInputIcon,
  };
};

export default useEditProfile;
