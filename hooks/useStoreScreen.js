import {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL, apiRoutes} from '../utilities/apiRoutes';
import {Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
const useStoreScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [listRefresh, setListRefresh] = useState(false);
  const [displayedData, setDisplayedData] = useState();
  const isFocused = useIsFocused();
  const getAllStoreItems = async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${API_URL}${apiRoutes.getAllStoreItems}`);
      if (response.status === 200) {
        setIsLoading(false);
        setListRefresh(false);
        setData(response.data.data);
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
    if (isFocused) {
      getAllStoreItems();
    }
    return () => {
      setListRefresh(false);
    };
  }, [listRefresh, isFocused]);

  return {
    isLoading,
    data,
    listRefresh,
    displayedData,
    setListRefresh,
    setDisplayedData,
  };
};

export default useStoreScreen;
