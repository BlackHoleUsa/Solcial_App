import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL, apiRoutes} from '../utilities/apiRoutes';
import {Alert} from 'react-native';
const useStoreScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [listRefresh, setListRefresh] = useState(false);

  const getAllStoreItems = async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${API_URL}${apiRoutes.getAllStoreItems}`);
      if (response.status === 200) {
        setIsLoading(false);
        setListRefresh(false);
        setData(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      if (error) {
        setListRefresh(false);
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
    getAllStoreItems();
  }, [listRefresh]);

  return {
    isLoading,
    data,
    listRefresh,
    setListRefresh,
  };
};

export default useStoreScreen;
