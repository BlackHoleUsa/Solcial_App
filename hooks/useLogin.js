import {useState} from 'react';

const useLogin = navigation => {
  const handleSignupNavigation = () => {
    navigation.navigate('Signup');
  };
  const handleForogotPasswordNavigation = () => {
    navigation.navigate('Forgot Password');
  };
  console.log('hello world');
  return {
    handleSignupNavigation,
    handleForogotPasswordNavigation,
  };
};

export default useLogin;
