import {useState, useEffect} from 'react';
import {apiRoutes} from '../utilities/apiRoutes';
import {API_URL} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';

const useRaffle = navigation => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState();

  const getAllRaffleItems = async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${API_URL}${apiRoutes.getAllRaffles}`);
      if (response.status === 200) {
        setIsLoading(false);
        setItem(response.data.allRaffles);
        console.log(item);
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
    getAllRaffleItems();
  }, []);

  return {
    isLoading,
    data: item,
  };
};

export default useRaffle;
