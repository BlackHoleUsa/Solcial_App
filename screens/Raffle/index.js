import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import RaffleAuctionCard from '../../components/RaffleAuctionCard';
import Search from '../../components/Search';
const Raffle = () => {
  return (
    <ScrollView style={styles.container__main}>
      <Search />
      <RaffleAuctionCard buttonLabel="Enter Raffel" />
      <RaffleAuctionCard buttonLabel="Enter Raffel" />
      <RaffleAuctionCard buttonLabel="Enter Raffel" />
      <RaffleAuctionCard buttonLabel="Enter Raffel" />
      <RaffleAuctionCard buttonLabel="Enter Raffel" />
    </ScrollView>
  );
};

export default Raffle;
