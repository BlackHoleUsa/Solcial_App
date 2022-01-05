import React, {useRef} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';

import {Dimensions} from 'react-native';
import {Images} from '../../../assets/images';
import Carousel from './Carousel';
const {width: windowWidth} = Dimensions.get('window');
const images = [
  `${Images.cardImage}`,
  `${Images.showImage}`,
  `${Images.websiteLogo}`,
  `${Images.large}`,
];
const StoreItemDetail = () => {
  const ref = useRef(null);
  return (
    <View style={styles.container__main}>
      <Carousel images={images} />
    </View>
  );
};

export default StoreItemDetail;
