import {useState} from 'react';
import * as yup from 'yup';
import {API_URL} from '../utilities/apiRoutes';
import {apiRoutes} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';

const usePaymentGateway = navigation => {
  const [isLoading, setIsLoading] = useState(false);
  const cardValidationSchema = yup.object().shape({
    cardNumber: yup.string().required('Required'),
    cardExpMonth: yup.string().required('Required'),
    cardExpYear: yup.string().required('Required'),

    cardCVC: yup.string().required('Required'),
  });
  // signup form submission

  const handlePayment = async values => {
    let newValues = {};
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_URL}${apiRoutes.signup}`,
        newValues,
      );
      if (response.status === 200) {
        setIsLoading(false);
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

export default usePaymentGateway;
