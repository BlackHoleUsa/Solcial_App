import {useState, useRef} from 'react';
import * as yup from 'yup';
const useForgotPassword = navigation => {
  const [passwordIcon, setPasswordIcon] = useState('eye-off');
  const passwordIconRef = useRef(false);

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

  const initialValues = {
    email: '',
    password: '',
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
  };

  // login form submission

  const handleForgotPassword = values => {
    console.log(values);
    navigation.navigate('Main App');
  };

  return {
    passwordIcon,
    forgotPasswordValidationSchema,
    initialValues,
    changePasswordInputIcon,

    handleForgotPassword,
  };
};

export default useForgotPassword;
