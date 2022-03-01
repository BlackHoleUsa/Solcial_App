import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCartItem} from '../redux/actions/actions';
const useStoreItemDetail = navigation => {
  const dispatch = useDispatch();
  const selectedStoreItem = useSelector(state => state.selectedStoreItem);
  const cart = useSelector(state => state.cart);
  const [sizeIndex, setSizeIndex] = useState(0);
  const images = [
    selectedStoreItem.product_url[0],
    selectedStoreItem.product_url[1],
    selectedStoreItem.product_url[2],
  ];

  const addToCart = () => {
    let obj = cart.find(o => o._id === selectedStoreItem._id);
    if (obj) {
      Alert.alert(
        'Error',
        'Already Present in the Cart',
        [
          {
            text: 'Cancel',
            onPress: () => navigation.navigate('Store Screen'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        },
      );
    } else {
      let modifiedItem = Object.assign(selectedStoreItem, {
        qty: 1,
        selectedSize: selectedStoreItem.size[sizeIndex],
      });
      dispatch(setCartItem(modifiedItem));
      Alert.alert(
        'Sucess',
        'Added To Cart',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Store Screen'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
        },
      );
    }
  };

  return {
    title: selectedStoreItem.name,
    description: selectedStoreItem.description,
    price: selectedStoreItem.price,
    images,
    addToCart,
    sizes: selectedStoreItem.size,
    sizeIndex,
    setSizeIndex,
  };
};

export default useStoreItemDetail;
