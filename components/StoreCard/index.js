import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './Styles';
import {Images} from '../../assets/images';
import Icons from 'react-native-vector-icons/Ionicons';
const StoreCard = () => {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__image}>
        <Image
          source={Images.cardImage}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.text__title}>Football shirt</Text>
      <View style={styles.container__priceAndCart}>
        <Text style={styles.text__price}>$50</Text>
        <Icons name="ios-cart-outline" size={25} color="black" />
      </View>
    </View>
  );
};

export default StoreCard;
