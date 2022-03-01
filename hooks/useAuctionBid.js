import {useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';
import {API_URL, apiRoutes} from '../utilities/apiRoutes';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';

const useAuctionBid = (highestBid, navigation) => {
  const [isLoading, setIsLoading] = useState(false);
  const bidder = useSelector(state => state.userInfo.id);
  const Token = useSelector(state => state.userInfo.authToken);
  const auction = useSelector(state => state.selectedAuctionItem.id);
  const bidValidationSchema = yup.object().shape({
    bid: yup
      .number()
      .typeError('Must be a number')
      .required('Required')
      .min(highestBid + 1, `Must be greater than ${highestBid}`),
  });

  const handleAuctionBid = async values => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${API_URL}${apiRoutes.placeBid}`,
        {
          bid_amount: values.bid,
          bidder,
          auction,
        },
        {
          headers: {Authorization: `Bearer ${Token}`},
        },
      );
      if (response.status === 200) {
        setIsLoading(false);
        Alert.alert('Congratulations', `${response.data.message}`, [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Auction Screen'),
            style: 'cancel',
          },
        ]);
      }
    } catch (error) {
      setIsLoading(false);
      if (error) {
        Alert.alert(
          'Error',
          `${error.response.data.message}`,
          [
            {
              text: 'Ok',

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
  return {
    isLoading,
    handleAuctionBid,
    bidValidationSchema,
  };
};

export default useAuctionBid;
