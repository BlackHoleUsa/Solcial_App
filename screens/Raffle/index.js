import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import RaffleAuctionCard from '../../components/RaffleAuctionCard';
import Search from '../../components/Search';
const Raffle = ({navigation}) => {
  return (
    <ScrollView style={styles.container__main}>
      <Search />
      <RaffleAuctionCard
        buttonLabel="Enter Raffel"
        navigation={navigation}
        itemRoute="Raffle Item"
        enteringAuctionOrRaffle="Enter Raffle"
      />
      <RaffleAuctionCard
        buttonLabel="Enter Raffel"
        navigation={navigation}
        itemRoute="Raffle Item"
        enteringAuctionOrRaffle="Enter Raffle"
      />
      <RaffleAuctionCard
        buttonLabel="Enter Raffel"
        navigation={navigation}
        itemRoute="Raffle Item"
      />
      <RaffleAuctionCard
        buttonLabel="Enter Raffel"
        navigation={navigation}
        itemRoute="Raffle Item"
      />
      <RaffleAuctionCard
        buttonLabel="Enter Raffel"
        navigation={navigation}
        itemRoute="Raffle Item"
      />
    </ScrollView>
  );
};

export default Raffle;
