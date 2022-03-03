import {useState, useEffect} from 'react';
import {apiRoutes} from '../utilities/apiRoutes';
import {API_URL} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
const useRaffle = navigation => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState();
  const [listRefresh, setListRefresh] = useState(false);
  const [displayedData, setDisplayedData] = useState();
  const isFocused = useIsFocused();
  const getAllRaffleItems = async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${API_URL}${apiRoutes.getAllRaffles}`);
      if (response.status === 200) {
        setIsLoading(false);

        setItem(response.data.allRaffles);
        setDisplayedData(response.data.allRaffles);
        setListRefresh(false);
      }
    } catch (error) {
      setIsLoading(false);
      setListRefresh(false);
      if (error.response.status === 404) {
        setDisplayedData();
        setItem([]);
      } else if (error) {
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
    if (isFocused) {
      getAllRaffleItems();
    }
    return () => {
      setListRefresh(false);
    };
  }, [listRefresh, isFocused]);

  return {
    isLoading,
    data: item,
    listRefresh,
    setListRefresh,
    setItem,
    displayedData,
    setDisplayedData,
  };
};

export default useRaffle;
