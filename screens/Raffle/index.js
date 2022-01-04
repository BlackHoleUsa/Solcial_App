import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import RaffleCard from './RaffleCard';
const Raffle = () => {
  return (
    <ScrollView style={styles.container__main}>
      <RaffleCard />
      <RaffleCard />
      <RaffleCard />
      <RaffleCard />
      <RaffleCard />
    </ScrollView>
  );
};

export default Raffle;
