import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import {styles} from './Styles';
const EnterRaffle = () => {
  return (
    <ScrollView style={styles.container__main}>
      <RaffleAuctionImage />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>Soccer Jacket</Text>
      </View>
    </ScrollView>
  );
};

export default EnterRaffle;
