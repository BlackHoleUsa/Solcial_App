import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import {Images} from '../../../assets/images';
import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';
const CartItemCard = ({navigation}) => {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__imageAndContent}>
        <View style={styles.container__image}>
          <Image source={Images.cardImage} style={styles.image} />
        </View>
        <View style={styles.container__content}>
          <Text style={styles.text__itemTitle}>Women hoodie</Text>
          <Text style={styles.text__size}>Size : L</Text>
          <View style={styles.container__priceAndButtons}>
            <Text style={styles.text__price}>$50</Text>
            <View style={styles.container__buttons}>
              <TouchableOpacity
                style={styles.quantity__button}
                onPress={() => {}}>
                <Icons name="minus" size={10} color="black" />
              </TouchableOpacity>
              <Text style={styles.text__quantity}>1</Text>
              <TouchableOpacity
                style={styles.quantity__button}
                onPress={() => {}}>
                <Icons name="plus" size={10} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container__removeButton}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Main App')}
          style={styles.remove__button}
          labelStyle={{color: 'black', fontFamily: 'Poppins-Light'}}>
          Remove
        </Button>
      </View>
    </View>
  );
};

export default CartItemCard;
