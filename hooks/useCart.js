import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

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
      setTotalSum(0);
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
