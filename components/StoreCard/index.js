import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import {Images} from '../../assets/images';
import Icons from 'react-native-vector-icons/Ionicons';
const StoreCard = ({navigation, item}) => {
  const handleNavigation = () => {
    navigation.navigate('Store Item');
  };
  return (
    <View style={styles.container__main}>
      <TouchableOpacity
        onPress={handleNavigation}
        style={styles.container__image}>
        <Image
          source={{uri: item?.product_url[0]}}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.text__title}>{item.name}</Text>
      <View style={styles.container__priceAndCart}>
        <Text style={styles.text__price}>${item.price}</Text>
        <Icons name="ios-cart-outline" size={20} color="black" />
      </View>
    </View>
  );
};

export default StoreCard;
