import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';
import {Images} from '../../assets/images';
import Icons from 'react-native-vector-icons/Ionicons';

const RaffleAndAuctionDetailCard = () => {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__card}>
        <View
          style={[styles.container__icon, {transform: [{translateX: -10}]}]}>
          <Icons
            name="chevron-down"
            color={'black'}
            size={25}
            style={styles.icon__down}
          />
        </View>
        <View style={styles.container__image}>
          <Image source={Images.cardImage} style={styles.image__card} />
        </View>
        <View style={styles.container__content}>
          <Text style={styles.text__title}>Soccer Jacket</Text>
          <Text style={styles.text__description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </Text>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text style={styles.text__button}>Enter Raffle</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RaffleAndAuctionDetailCard;
