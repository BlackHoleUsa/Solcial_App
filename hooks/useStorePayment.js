import {useState} from 'react';
import * as yup from 'yup';
import {API_URL} from '../utilities/apiRoutes';
import {apiRoutes} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';

const useStorePayment = amount => {
  const selectedRaffleAuctionItem = useSelector(
    state => state.selectedRaffleAuctionItem,
  );

  const userId = useSelector(state => state.userInfo.id);
  const [isLoading, setIsLoading] = useState(false);
  const cardValidationSchema = yup.object().shape({
    cardNumber: yup.string().required('Required'),
    cardExpMonth: yup.string().required('Required'),
    cardExpYear: yup.string().required('Required'),

    cardCVC: yup.string().required('Required'),
  });
  // signup form submission

  const handlePayment = async values => {
    let newValues = {
      ...values,
      userId,
      amount,
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_URL}${apiRoutes.rafflePayment}?raffleId=${selectedRaffleAuctionItem._id}`,
        newValues,
      );
      if (response.status === 200) {
        setIsLoading(false);
        console.log(response);
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
