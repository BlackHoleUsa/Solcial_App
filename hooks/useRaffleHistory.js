import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {API_URL, apiRoutes} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
const useRaffleHistory = (navigation, item) => {
  const user = useSelector(state => state.userInfo);
  const isFocused = useIsFocused();
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState();
  const getAuctionHistory = async () => {
    try {
      setisLoading(true);
      const response = await axios.get(
        `${API_URL}${apiRoutes.getNotificationAndHistory}${user.id}`,
      );
      if (response.status === 200) {
        setisLoading(false);
        console.log('api response', response);
        setData(response.data.data);
      }
    } catch (error) {
      setisLoading(false);
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

  useEffect(() => {
    getAuctionHistory();
  }, [isFocused]);

  return {
    isFocused,
    isLoading,
    data,
  };
};

export default useRaffleHistory;
