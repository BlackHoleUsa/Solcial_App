import {useState, useEffect} from 'react';
import {apiRoutes} from '../utilities/apiRoutes';
import {API_URL} from '../utilities/apiRoutes';
import axios, {Axios} from 'axios';
import {Alert} from 'react-native';

const useRaffle = navigation => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState();

  const getAllRaffleItems = async () => {
    try {
      const response = await axios(`${API_URL}${apiRoutes.getAllRaffles}`);
      if (response.status === 200) {
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
    item,
  };
};

export default useRaffle;
