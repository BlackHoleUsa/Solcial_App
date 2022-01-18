import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import AuctionTime from './AuctionTime';
import {styles} from './Styles';

import useEnterAuction from '../../../hooks/useEnterAuction';
const EnterAuction = ({navigation}) => {
  const {image, title, description, highestBid, endTime} =
    useEnterAuction(navigation);

  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <RaffleAuctionImage navigation={navigation} image={image} />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>{title}</Text>
        <Text style={styles.text__description}>{description}</Text>

        <View style={styles.container__raffle_close_time}>
          <Text style={styles.text__auction}>Current Highest Bid: </Text>
          <Text style={styles.text___highest_bid}>${highestBid}</Text>
        </View>
        <AuctionTime endTime={endTime} />
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text__button}>Enter Auction</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EnterAuction;
