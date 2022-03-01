import {useDispatch, useSelector} from 'react-redux';
import {
  setAddQty,
  setRemoveCartItem,
  setRemoveQty,
} from '../redux/actions/actions';

const useCartItem = (navigation, item) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeCartItem = () => {
    dispatch(setRemoveCartItem(item));
  };

  const addQty = () => {
    dispatch(setAddQty(item));
  };
  const removeQty = () => {
    dispatch(setRemoveQty(item));
  };
  return {
    cart,
    removeCartItem,
    addQty,
    removeQty,
  };
};

export default useCartItem;
