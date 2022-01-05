import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import {Images} from '../../assets/images';
import Icons from 'react-native-vector-icons/Ionicons';
const StoreCard = ({navigation}) => {
  const handleNavigation = () => {
    navigation.navigate('Store Item');
  };
  return (
    <View style={styles.container__main}>
      <TouchableOpacity
        onPress={handleNavigation}
        style={styles.container__image}>
        <Image
          source={Images.cardImage}
          style={styles.image}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text style={styles.text__title}>Football shirt</Text>
      <View style={styles.container__priceAndCart}>
        <Text style={styles.text__price}>$50</Text>
        <Icons name="ios-cart-outline" size={20} color="black" />
      </View>
    </View>
  );
};

export default StoreCard;
