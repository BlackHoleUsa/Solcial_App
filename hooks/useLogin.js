import {useState, useRef} from 'react';
import * as yup from 'yup';
const useLogin = navigation => {
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const passwordIconRef = useRef(false);
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

  const handleLogin = values => {
    console.log(values);
    navigation.navigate('Main App');
  };

  return {
    passwordIcon,
    loginValidationSchema,
    changePasswordInputIcon,
    handleSignupNavigation,
    handleForogotPasswordNavigation,
    handleLogin,
  };
};

export default useLogin;
