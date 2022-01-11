import {useState, useRef} from 'react';

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
  return {
    passwordIcon,
    changePasswordInputIcon,
    handleSignupNavigation,
    handleForogotPasswordNavigation,
  };
};

export default useLogin;
