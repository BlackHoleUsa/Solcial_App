import {useState, useEffect, useCallback} from 'react';
import {apiRoutes} from '../utilities/apiRoutes';
import {API_URL} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
const useAuction = navigation => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState();
  const [listRefresh, setListRefresh] = useState(false);
  const [displayedData, setDisplayedData] = useState();
  const isFocused = useIsFocused();
  const getAllAuctions = async () => {
    setIsLoading(true);

    try {
      const response = await axios(
        `${API_URL}${apiRoutes.getAllAuctionListing}`,
      );
      if (response.status === 200) {
        setIsLoading(false);
        setListRefresh(false);
        setItem(response.data.data);
        setDisplayedData(response.data.data);
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
    if (isFocused || listRefresh) {
      getAllAuctions();
    }
    return () => {
      setListRefresh(false);
    };
  }, [listRefresh, isFocused]);

  return {
    isLoading,
    data: item,
    listRefresh,
    displayedData,
    setListRefresh,
    setDisplayedData,
  };
};

export default useAuction;
