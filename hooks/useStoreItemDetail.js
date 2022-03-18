import {useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setAddQty, setCartItem} from '../redux/actions/actions';
import uuid from 'react-native-uuid';
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

    let cartObj = cart.filter(item => item._id === obj?._id);

    let sizeFilter = cartObj?.filter(
      item => item.selectedSize === selectedStoreItem.size[sizeIndex],
    );

    if (sizeFilter.length) {
      dispatch(setAddQty(sizeFilter[0]));

      Alert.alert(
        'Success!',
        'Your Item Has Been Added To Your Cart.',
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
    } else {
      let modifiedItem = Object.assign(selectedStoreItem, {
        qty: 1,
        selectedSize: selectedStoreItem.size[sizeIndex],
        newId: uuid.v4(),
      });
      dispatch(setCartItem(modifiedItem));
      Alert.alert(
        'Success!',
        'Your Item Has Been Added To Your Cart.',
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
