import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import AuctionTime from './AuctionTime';
import {styles} from './Styles';

const EnterAuction = () => {
  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <RaffleAuctionImage />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>Soccer Jacket</Text>
        <Text style={styles.text__description}>
          t is a long established fact that a reader will be distracted by the
          readable content. t is a long established fact that a reader will be
          distracted by the readable content.
        </Text>
        <View style={styles.container__raffle_close_time}>
          <Text style={styles.text__auction}>Current Highest Bid: </Text>
          <Text style={styles.text___highest_bid}>$100</Text>
        </View>
        <AuctionTime />
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text__button}>Enter Auction</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EnterAuction;
