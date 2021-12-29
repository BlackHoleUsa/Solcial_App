import {useState} from 'react';

const useLogin = navigation => {
  const handleSignupNavigation = () => {
    navigation.navigate('Signup');
  };
  const handleForogotPasswordNavigation = () => {
    navigation.navigate('Forgot Password');
  };
  return {
    handleSignupNavigation,
    handleForogotPasswordNavigation,
  };
};

export default useLogin;
