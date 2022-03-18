import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './Styles';

import useStoreCard from '../../hooks/useStoreCard';
const StoreCard = ({navigation, item}) => {
  const {handleNavigation} = useStoreCard(navigation, item);

  return (
    <View style={styles.container__main}>
      <TouchableOpacity
        onPress={handleNavigation}
        style={styles.container__image}>
        <Image
          source={{uri: item?.product_url[0]}}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.text__title}>{item.name}</Text>
      <View style={styles.container__priceAndCart}>
        <Text style={styles.text__price}>${item.price}</Text>
        {/* <Icons
          name={cartIcon}
          size={20}
          color="black"
          onPress={() => addToCart()}
        /> */}
      </View>
    </View>
  );
};

export default StoreCard;
