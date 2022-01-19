import React, {useState} from 'react';
import {useSelector} from 'react-redux';
const useStoreItemDetail = navigation => {
  const selectedStoreItem = useSelector(state => state.selectedStoreItem);
  const images = [
    selectedStoreItem.product_url[0],
    selectedStoreItem.product_url[1],
    selectedStoreItem.product_url[2],
  ];
  return {
    title: selectedStoreItem.name,
    description: selectedStoreItem.description,
    price: selectedStoreItem.price,
    images,
  };
};

export default useStoreItemDetail;
