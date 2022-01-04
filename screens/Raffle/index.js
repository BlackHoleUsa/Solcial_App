import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import RaffleAuctionCard from '../../components/RaffleAuctionCard';
const Raffle = () => {
  return (
    <ScrollView style={styles.container__main}>
      <RaffleAuctionCard />
      <RaffleAuctionCard />
      <RaffleAuctionCard />
      <RaffleAuctionCard />
      <RaffleAuctionCard />
    </ScrollView>
  );
};

export default Raffle;
