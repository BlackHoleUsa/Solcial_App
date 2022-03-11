import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useStripe} from '@stripe/stripe-react-native';
import {apiRoutes, API_URL} from '../utilities/apiRoutes';
import {Alert} from 'react-native';
import axios from 'axios';
const useEnterRaffle = () => {
  const selectedRaffleItem = useSelector(state => state.selectedRaffleItem);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  const [loading, setLoading] = useState(false);
  const [intent, setIntent] = useState();
  const [noOfTickets, setNoOfTickets] = useState(1);
  const handleMinusTicket = () => {
    if (noOfTickets < 2) {
      setNoOfTickets(1);
    } else {
      setNoOfTickets(noOfTickets - 1);
    }
  };
  const handlePlusTicket = () => {
    setNoOfTickets(noOfTickets + 1);
  };
  const fetchPaymentSheetParams = async () => {
    const response = await axios.post(
      `${API_URL}/${apiRoutes.rafflePaymentIntent}`,
      {},
    );
    const {paymentIntent, ephemeralKey, customer} = await response.json();
    if (paymentIntent) {
      console.log(paymentIntent);
      setIntent(paymentIntent);
    }
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    setLoading(true);
    const {paymentIntent, ephemeralKey, customer, publishableKey} =
      await fetchPaymentSheetParams();

    const {error} = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,

      merchantDisplayName: 'Raffle Payment',
    });
    if (!error) {
      setLoading(false);
      openPaymentSheet();
    }
  };

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  return {
    monthNames,
    noOfTickets,
    selectedRaffleItem,
    handleMinusTicket,
    handlePlusTicket,
    initializePaymentSheet,
    loading,
  };
};

export default useEnterRaffle;
