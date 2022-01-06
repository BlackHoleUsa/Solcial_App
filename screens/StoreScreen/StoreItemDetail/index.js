import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';

import {Images} from '../../../assets/images';
import Carousel from './Carousel';

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
    </View>
  );
};

export default StoreItemDetail;
