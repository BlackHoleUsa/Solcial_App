import {useState, useEffect} from 'react';
import {apiRoutes} from '../utilities/apiRoutes';
import {API_URL} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';

const useAuction = navigation => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState();

  const getAllAuctions = async () => {
    setIsLoading(true);
    try {
      const response = await axios(
        `${API_URL}${apiRoutes.getAllAuctionListing}`,
      );
      if (response.status === 200) {
        setIsLoading(false);
        console.log('the item', response.data);
        setItem(response.data.data);
        console.log('state', item);
      }
    } catch (error) {
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
    getAllAuctions();
  }, []);

  return {
    isLoading,
    data: item,
  };
};

export default useAuction;
