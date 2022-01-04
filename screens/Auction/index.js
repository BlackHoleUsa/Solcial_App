import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import RaffleAuctionCard from '../../components/RaffleAuctionCard';
import Search from '../../components/Search';
import {styles} from './Styles';
const Auction = () => {
  return (
    <ScrollView style={styles.container__main}>
      <Search />
      <RaffleAuctionCard buttonLabel="Enter Auction" />
      <RaffleAuctionCard buttonLabel="Enter Auction" />
      <RaffleAuctionCard buttonLabel="Enter Auction" />
      <RaffleAuctionCard buttonLabel="Enter Auction" />
      <RaffleAuctionCard buttonLabel="Enter Auction" />
    </ScrollView>
  );
};

export default Auction;
