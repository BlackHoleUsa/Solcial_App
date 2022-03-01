import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';

import Icons from 'react-native-vector-icons/AntDesign';
const RaffleAuctionImage = ({navigation, image}) => {
  return (
    <View style={styles.container__main}>
      <Image style={styles.image} source={{uri: image}} resizeMode="contain" />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.container__icon}>
        <Icons name="arrowleft" size={25} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default RaffleAuctionImage;
