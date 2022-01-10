import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import RaffleAmount from './RaffleAmount';
import {styles} from './Styles';
const EnterRaffle = () => {
  return (
    <ScrollView style={styles.container__main}>
      <RaffleAuctionImage />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>Soccer Jacket</Text>
        <Text style={styles.text__description}>
          t is a long established fact that a reader will be distracted by the
          readable content.
        </Text>
        <View style={styles.container__raffle_close_time}>
          <Text style={styles.text__raffle_close_on}>Raffle Close on :</Text>
          <Text style={styles.text__raffle_close_time}>22 oct, at 2pm</Text>
        </View>
        <RaffleAmount />
        <Text style={styles.text__price_per_ticket}>
          <Text>$10</Text> per ticket
        </Text>
        <Text style={styles.text__check_results}>
          Check results on <Text>14th oct, 4pm</Text>
        </Text>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text__button}>Enter Raffle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EnterRaffle;
