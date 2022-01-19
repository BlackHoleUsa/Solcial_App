import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setCartItem, setSelectedStoreItem} from '../redux/actions/actions';
const useStoreCard = (navigation, item) => {
  const [cartIcon, setCartIcon] = useState('ios-cart-outline');
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const handleNavigation = () => {
    dispatch(setSelectedStoreItem(item));
    navigation.navigate('Store Item');
  };

  const addToCart = () => {
    let obj = cart.find(o => o._id === item._id);
    setCartIcon('cart');
    if (!obj) {
      dispatch(setCartItem(item));
    }
  };

  useEffect(() => {
    let obj = cart.find(o => o._id === item._id);

    if (obj) {
      setCartIcon('cart');
    }
  }, []);

  return {
    cartIcon,
    handleNavigation,
    addToCart,
  };
};

export default useStoreCard;
