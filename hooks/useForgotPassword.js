import {useState, useRef} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import {apiRoutes} from '../utilities/apiRoutes';
import {API_URL} from '../utilities/apiRoutes';
import {Alert} from 'react-native';
const useForgotPassword = navigation => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const passwordIconRef = useRef(false);
  const [resetPassword, setResetPassword] = useState(true);
  const changePasswordInputIcon = () => {
    passwordIconRef.current = passwordIcon;
    passwordIconRef.current === 'eye'
      ? setPasswordIcon('eye-off')
      : setPasswordIcon('eye');
  };

  // validation schema for login form
  const forgotPasswordValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    otp1: yup.number('number').required('required'),
    otp2: yup.number('number').required('required'),
    otp3: yup.number('number').required('required'),
    otp4: yup.number('number').required('required'),
  });

  const user_email_schema = yup.object().shape({
    user_email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
  });

  const initialValues = {
    email: '',
    password: '',
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
  };

  // handle user request for forgot pasword
  const handleUserForgotPasswordRequest = async values => {
    const code = Math.floor(1000 + Math.random() * 9000);

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_URL}${apiRoutes.requestResetPassword}`,
        {
          email: values.user_email,
          code: code.toString(),
        },
      );
      if (response.status === 200) {
        setResetPassword(false);
        setIsLoading(false);
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

  // handle rest password

  const handleForgotPassword = async values => {
    try {
      setIsLoading(true);
      const response = await axios.post(`${API_URL}${apiRoutes.verifyCode}`, {
        email: values.user_email,
        code: `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`,
        newPassword: values.password,
      });
      if (response.status === 200) {
        setResetPassword(false);
        setIsLoading(false);
        Alert.alert(
          'Success',
          `${response.data.message}`,
          [{text: 'OK', onPress: () => navigation.navigate('Login')}],
          {
            cancelable: true,
          },
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
    resetPassword,
    passwordIcon,
    forgotPasswordValidationSchema,
    initialValues,
    user_email_schema,
    changePasswordInputIcon,
    handleUserForgotPasswordRequest,
    handleForgotPassword,
  };
};

export default useForgotPassword;
