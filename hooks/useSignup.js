import {useState, useRef} from 'react';
import * as yup from 'yup';
import {API_URL} from '@env';
import {apiRoutes} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignup} from '../redux/actions/actions';
const useSignup = navigation => {
  const [countryCode, setCountryCode] = useState('US');
  const [country, setCountry] = useState({
    cca2: 'US',
    currency: ['USD'],
    callingCode: ['1'],
    region: 'Americas',
    subregion: 'North America',
  });
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const [isLoading, setIsLoading] = useState(false);
  const passwordIconRef = useRef(false);
  const dispatch = useDispatch();
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
  // signup form submission

  const handleSignup = async values => {
    let newValues = {
      firstname: values.firstName,
      lastname: values.lastName,
      mobilephone: `+${country.callingCode[0]}${values.mobileNumber}`,
      email: values.email,
      password: values.password,
      address: values.address,
      city: values.city,
      state: values.state,
      country: values.country,
      zipcode: values.zipCode,
      role: 'user',
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_URL}${apiRoutes.signup}`,
        newValues,
      );
      if (response.status === 200) {
        setIsLoading(false);
        dispatch(
          setSignup({
            authToken: response.data.tokens,
            firstName: response.data.user.firstname,
            lastName: response.data.user.lastname,
            email: response.data.user.email,
            id: response.data.user._id,
          }),
        );
      }
    } catch (error) {
      setIsLoading(false);
      if (error) {
        Alert.alert(
          'Error',
          `${error.response.data.message}`,
          [
            {
              text: 'Cancel',

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
    isLoading,
    onSelect,
    moveToLoginScreen,
    handleSignup,
    changePasswordInputIcon,
  };
};

export default useSignup;
