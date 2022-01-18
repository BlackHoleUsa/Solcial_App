import {useState, useRef} from 'react';
import * as yup from 'yup';
import {setAuth} from '../redux/actions/actions';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {apiRoutes} from '../utilities/apiRoutes';
import {API_URL} from '../utilities/apiRoutes';
import {Alert} from 'react-native';
const useLogin = navigation => {
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const passwordIconRef = useRef(false);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const handleSignupNavigation = () => {
    navigation.navigate('Signup');
  };
  const handleForogotPasswordNavigation = () => {
    navigation.navigate('Forgot Password');
  };
  const changePasswordInputIcon = () => {
    passwordIconRef.current = passwordIcon;
    passwordIconRef.current === 'eye'
      ? setPasswordIcon('eye-off')
      : setPasswordIcon('eye');
  };

  // validation schema for login form
  const loginValidationSchema = yup.object().shape({
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

  const handleLogin = async values => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${API_URL}${apiRoutes.login}`, values);
      if (response.status === 200) {
        setIsLoading(false);
        dispatch(
          setAuth({
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

  return {
    isLoading,
    passwordIcon,
    loginValidationSchema,
    changePasswordInputIcon,
    handleSignupNavigation,
    handleForogotPasswordNavigation,
    handleLogin,
  };
};

export default useLogin;
