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
    cart.some(item => {
      if (item._id === selectedStoreItem._id) {
        return console.log('already present in the item');
      } else {
        dispatch(setCartItem(selectedStoreItem));
      }
    });
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
