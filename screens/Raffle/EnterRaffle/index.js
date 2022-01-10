import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import RaffleAmount from './RaffleAmount';
import {styles} from './Styles';
const EnterRaffle = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <RaffleAuctionImage navigation={navigation} />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>Soccer Jacket</Text>
        <Text style={styles.text__description}>
          t is a long established fact that a reader will be distracted by the
          readable content. t is a long established fact that a reader will be
          distracted by the readable content.
        </Text>
        <View style={styles.container__raffle_close_time}>
          <Text style={styles.text__raffle_close_on}>Raffle Close on: </Text>
          <Text style={styles.text__raffle_close_time}>22 oct, at 2pm</Text>
        </View>
        <RaffleAmount />
        <View style={styles.container__price_per_ticket}>
          <Text style={styles.text__price}>$10 </Text>
          <Text style={styles.text__price_per_ticket}>per ticket</Text>
        </View>
        <View style={styles.container__price_per_ticket}>
          <Text style={styles.text__check_results}>Check results on </Text>
          <Text style={styles.text__results}> 14th oct, 4pm</Text>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text__button}>Enter Raffle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EnterRaffle;
