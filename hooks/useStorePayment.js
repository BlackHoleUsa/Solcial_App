import {useState} from 'react';
import * as yup from 'yup';
import {API_URL} from '../utilities/apiRoutes';
import {apiRoutes} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setClearCart} from '../redux/actions/actions';
const useStorePayment = (amount, navigation) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userInfo.id);
  const [isLoading, setIsLoading] = useState(false);
  const cardValidationSchema = yup.object().shape({
    cardNumber: yup.number().typeError('Only number').required('Required'),
    cardExpMonth: yup.number().typeError('Only number').required('Required'),
    cardExpYear: yup.number().typeError('Only number').required('Required'),

    cardCVC: yup.number().typeError('Only number').required('Required'),
  });
  // signup form submission
  const products = cart.map(item => {
    return {
      productId: item._id,
      quantity: item.qty,
      price: item.price,
    };
  });
  const handlePayment = async values => {
    let newValues = {
      ...values,
      userId,
      totalAmount: amount,
      products,
    };

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_URL}${apiRoutes.cartCheckout}`,
        newValues,
      );
      if (response.status === 200) {
        setIsLoading(false);
        Alert.alert(
          'Congratulations',
          `${response.data.message}`,
          [
            {
              text: 'Cancel',
              onPress: () => {
                dispatch(setClearCart());
                navigation.navigate('Store Screen');
              },
              style: 'cancel',
            },
          ],
          {
            cancelable: true,
          },
        );
      }
    } catch (error) {
      setIsLoading(false);
      if (error) {
        Alert.alert(
          'Error',
          `${error.response.data.message}`,
          [
            {
              text: 'Cancel',

              style: 'cancel',
            },
          ],
          {
            cancelable: true,
          },
        );
      }
    }
  };

  const initialValues = {
    cardNumber: '',
    cardExpMonth: '',
    cardExpYear: '',
    cardCVC: '',
  };

  return {
    cardValidationSchema,

    initialValues,
    isLoading,

    handlePayment,
  };
};

export default useStorePayment;
