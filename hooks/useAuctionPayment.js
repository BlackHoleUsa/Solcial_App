import {useState} from 'react';
import * as yup from 'yup';
import {API_URL} from '../utilities/apiRoutes';
import {apiRoutes} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';

const useAuctionPayment = (amount, id, navigation) => {
  const year = new Date().getFullYear();
  const userId = useSelector(state => state.userInfo.id);
  const [isLoading, setIsLoading] = useState(false);
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

  const handlePayment = async values => {
    let newValues = {
      ...values,
      userId,
      amount,
      auctionId: id,
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_URL}${apiRoutes.auctionPayment}`,
        newValues,
      );
      if (response.status === 200) {
        setIsLoading(false);

        Alert.alert(
          'Congratulations',
          'Your auction item has been purchased',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('Auction Screen'),
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

export default useAuctionPayment;
