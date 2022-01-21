import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './Styles';

import Icons from 'react-native-vector-icons/AntDesign';
import useCartItem from '../../../hooks/useCartItem';
const CartItemCard = ({navigation, item}) => {
  const {removeCartItem, addQty, removeQty} = useCartItem(navigation, item);
  return (
    <View style={styles.container__main}>
      <View style={styles.container__imageAndContent}>
        <View style={styles.container__image}>
          <Image
            source={{uri: item.product_url[0]}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.container__content}>
          <View>
            <Text style={styles.text__itemTitle}>{item.name}</Text>
            <Text style={styles.text__size}>Size : {item.selectedSize}</Text>
          </View>
          <View style={styles.container__priceAndButtons}>
            <Text style={styles.text__price}>${item.price}</Text>
            <View style={styles.container__buttons}>
              <TouchableOpacity
                style={styles.quantity__button}
                onPress={() => removeQty()}>
                <Icons name="minus" size={10} color="black" />
              </TouchableOpacity>
              <Text style={styles.text__quantity}>{item.qty}</Text>
              <TouchableOpacity
                style={styles.quantity__button}
                onPress={() => addQty()}>
                <Icons name="plus" size={10} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container__removeButton}>
        <TouchableOpacity
          style={styles.remove__button}
          onPress={() => removeCartItem()}>
          <Text style={styles.text__remove__button}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemCard;
