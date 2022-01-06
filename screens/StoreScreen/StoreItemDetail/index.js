import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';

import {Images} from '../../../assets/images';
import Carousel from './Carousel';
import {Button} from 'react-native-paper';

const images = [
  `${Images.cardImage}`,
  `${Images.showImage}`,
  `${Images.websiteLogo}`,
  `${Images.large}`,
];
const StoreItemDetail = () => {
  return (
    <View style={styles.container__main}>
      <Carousel images={images} />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>Soccer Jacket</Text>
        <Text style={styles.text__description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Text style={styles.text__price}>Price $50</Text>
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
    </View>
  );
};

export default StoreItemDetail;
