import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useCart = navigation => {
  const [totalSum, setTotalSum] = useState();
  const cart = useSelector(state => state.cart);
  const cartSum = () => {
    if (cart.length) {
      const qty = cart
        ?.map(item => item.qty * item.price)
        ?.reduce((prev, next) => prev + next);
      setTotalSum(qty);
    } else {
      return;
    }
  };

  useEffect(() => {
    cartSum();
  }, [cart]);

  return {
    cart,
    totalSum,
  };
};

export default useCart;
