import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setRemoveCartItem} from '../redux/actions/actions';

const useCartItem = (navigation, item) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeCartItem = () => {
    dispatch(setRemoveCartItem(item));
  };

  return {
    cart,
    removeCartItem,
  };
};

export default useCartItem;
