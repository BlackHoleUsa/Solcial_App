import React, {Platform} from 'react';

const useSignup = navigation => {
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

  return {
    DEFAULT_THEME,
  };
};

export default useSignup;
