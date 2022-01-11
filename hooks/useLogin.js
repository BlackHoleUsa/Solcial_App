import {useState, useRef} from 'react';

const useLogin = navigation => {
  const [passwordIcon, setPasswordIcon] = useState('eye');
  const passwordIconRef = useRef(false);
  const handleSignupNavigation = () => {
    navigation.navigate('Signup');
  };
  const handleForogotPasswordNavigation = () => {
    navigation.navigate('Forgot Password');
  };
  const changePasswordInputIcon = () => {
    passwordIconRef.current = passwordIcon;
    passwordIconRef.current === 'eye-off'
      ? setPasswordIcon('eye')
      : setPasswordIcon('eye-off');
  };
  return {
    passwordIcon,
    changePasswordInputIcon,
    handleSignupNavigation,
    handleForogotPasswordNavigation,
  };
};

export default useLogin;
