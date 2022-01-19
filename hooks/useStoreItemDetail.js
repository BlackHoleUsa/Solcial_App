import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCartItem} from '../redux/actions/actions';
const useStoreItemDetail = navigation => {
  const dispatch = useDispatch();
  const selectedStoreItem = useSelector(state => state.selectedStoreItem);
  const cart = useSelector(state => state.cart);
  const images = [
    selectedStoreItem.product_url[0],
    selectedStoreItem.product_url[1],
    selectedStoreItem.product_url[2],
  ];

  const addToCart = () => {
    let obj = cart.find(o => o._id === selectedStoreItem._id);
    if (obj) {
      console.log('already present');
    } else {
      console.log('not presetn');
      dispatch(setCartItem(selectedStoreItem));
    }
  };

  return {
    title: selectedStoreItem.name,
    description: selectedStoreItem.description,
    price: selectedStoreItem.price,
    images,
    addToCart,
  };
};

export default useStoreItemDetail;