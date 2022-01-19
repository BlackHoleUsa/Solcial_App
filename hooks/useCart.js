import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useCart = navigation => {
  const cart = useSelector(state => state.cart);

  return {
    cart,
  };
};

export default useCart;
