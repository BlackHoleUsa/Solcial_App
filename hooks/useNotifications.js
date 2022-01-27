import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {apiRoutes, API_URL} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
const useNotifications = navigation => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const user = useSelector(state => state.userInfo.id);
  const isFocused = useIsFocused();
  const [listRefresh, setListRefresh] = useState(false);
  const [amount, setAmount] = useState();
  const getAllNotifications = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${API_URL}${apiRoutes.getNotificationAndHistory}${user}`,
      );
      if (response.status === 200) {
        setIsLoading(false);

        setData(response.data.data);
        console.log(response.data.data);
        setListRefresh(false);
      }
    } catch (error) {
      setIsLoading(false);
      setListRefresh(false);
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

  useEffect(() => {
    getAllNotifications();
  }, [listRefresh, isFocused]);

  return {
    isLoading,
    isFocused,
    listRefresh,
    data,
    amount,
    setAmount,
    setListRefresh,
  };
};

export default useNotifications;
