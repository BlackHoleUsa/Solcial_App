import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';

import {Images} from '../../../assets/images';
import Carousel from './Carousel';
import {Button} from 'react-native-paper';
import useStoreItemDetail from '../../../hooks/useStoreItemDetail';

// const images = [
//   `${Images.cardImage}`,
//   `${Images.showImage}`,
//   `${Images.websiteLogo}`,
//   `${Images.large}`,
// ];
const StoreItemDetail = ({navigation}) => {
  const {title, description, price, images} = useStoreItemDetail(navigation);
  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <Carousel images={images} />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>{title}</Text>
        <Text style={styles.text__description}>{description}</Text>
        <Text style={styles.text__price}>Price ${price}</Text>
        <View style={styles.container__size}>
          <Text style={styles.text__size}>Size:</Text>
          <View style={styles.container__size__buttons}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.text__size__button}>40</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.text__size__button}>41</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.text__size__button}>42</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          mode="contained"
          onPress={() => {}}
          style={styles.button__checkout}
          labelStyle={{color: 'white', fontFamily: 'Poppins-Regular'}}>
          Checkout
        </Button>
      </View>
    </ScrollView>
  );
};

export default StoreItemDetail;
