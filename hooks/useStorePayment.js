import {useState} from 'react';
import * as yup from 'yup';
import {API_URL} from '../utilities/apiRoutes';
import {apiRoutes} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setClearCart} from '../redux/actions/actions';
const useStorePayment = (hideModal, amount, navigation) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userInfo.id);
  const [isLoading, setIsLoading] = useState(false);
  const year = new Date().getFullYear();
  const cardValidationSchema = yup.object().shape({
    cardNumber: yup
      .number()
      .typeError('Only number')
      .required('Required')
      .min(1000000000000000, 'Correct card no required')
      .max(9999999999999999, 'Correct card no required'),
    cardExpMonth: yup
      .number()
      .typeError('Only number')
      .required('Required')
      .min(1)
      .max(12),
    cardExpYear: yup
      .number()
      .typeError('Only number')
      .required('Required')
      .min(year)
      .max(3000),

    cardCVC: yup
      .number()
      .typeError('Only number')
      .required('Required')
      .min(100)
      .max(999),
  });
  // signup form submission
  const products = cart.map(item => {
    return {
      productId: item._id,
      quantity: item.qty,
      price: item.price,
      size: item.selectedSize,
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
              text: 'Ok',
              onPress: () => {
                dispatch(setClearCart());
                hideModal();
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
