import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import RaffleCard from './RaffleCard';
const Raffle = () => {
  return (
    <View style={styles.container__main}>
      <RaffleCard />
    </View>
  );
};

export default Raffle;
