import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './Styles';
import {Images} from '../../../assets/images';
import {Button} from 'react-native-paper';
const CartItemCard = ({navigation}) => {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__image}>
        <Image source={Images.cardImage} style={styles.image} />
      </View>
      <View style={styles.container__content}>
        <Text style={styles.text__itemTitle}>Women hoodie</Text>
        <Text style={styles.text__size}>Size : L</Text>
        <View style={styles.container__priceAndButtons}>
          <Text style={styles.text__price}>$50</Text>
          <View style={styles.container__buttons}>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Main App')}
              style={styles.quantity__button}
              labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
              -
            </Button>
            <Text style={styles.text__quantity}>1</Text>
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Main App')}
              style={styles.quantity__button}
              labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
              +
            </Button>
          </View>
        </View>
      </View>
      <View style={styles.container__removeButton}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Main App')}
          style={styles.remove__button}
          labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
          Remove
        </Button>
      </View>
    </View>
  );
};

export default CartItemCard;
