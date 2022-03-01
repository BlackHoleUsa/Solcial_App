import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {API_URL, apiRoutes} from '../utilities/apiRoutes';
import axios from 'axios';
import {Alert} from 'react-native';
const useAuctionHistory = (navigation, item) => {
  const user = useSelector(state => state.userInfo);
  const isFocused = useIsFocused();
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState();
  const getAuctionHistory = async () => {
    try {
      setisLoading(true);
      const response = await axios.get(
        `${API_URL}${apiRoutes.auctionHistory}${user.id}`,
      );
      if (response.status === 200) {
        setisLoading(false);

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

export default useAuctionHistory;
