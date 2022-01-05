import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import RaffleAuctionCard from '../../components/RaffleAuctionCard';
import Search from '../../components/Search';
import {styles} from './Styles';
const Auction = ({navigation}) => {
  return (
    <ScrollView style={styles.container__main}>
      <Search />
      <RaffleAuctionCard
        buttonLabel="Enter Auction"
        navigation={navigation}
        itemRoute="Auction Item"
      />
      <RaffleAuctionCard
        buttonLabel="Enter Auction"
        navigation={navigation}
        itemRoute="Auction Item"
      />
      <RaffleAuctionCard
        buttonLabel="Enter Auction"
        navigation={navigation}
        itemRoute="Auction Item"
      />
      <RaffleAuctionCard
        buttonLabel="Enter Auction"
        navigation={navigation}
        itemRoute="Auction Item"
      />
      <RaffleAuctionCard
        buttonLabel="Enter Auction"
        navigation={navigation}
        itemRoute="Auction Item"
      />
    </ScrollView>
  );
};

export default Auction;
