import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';
import {Images} from '../../assets/images';
import Icons from 'react-native-vector-icons/AntDesign';
const RaffleAuctionImage = ({navigation}) => {
  return (
    <View style={styles.container__main}>
      <Image
        style={styles.image}
        source={Images.showImage}
        resizeMode="contain"
      />
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
