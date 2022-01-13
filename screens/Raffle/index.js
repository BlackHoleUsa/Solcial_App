import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import RaffleAuctionCard from '../../components/RaffleAuctionCard';
import Search from '../../components/Search';
import {storeScreen} from '../../assets/Data';
import useRaffle from '../../hooks/useRaffle';
const Raffle = ({navigation}) => {
  const {isLoading} = useRaffle(navigation);
  return (
    <View style={styles.container__main}>
      <Search />
      <FlatList
        data={storeScreen}
        horizontal={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <RaffleAuctionCard
            buttonLabel="Enter Raffel"
            navigation={navigation}
            itemRoute="Raffle Item"
            enteringAuctionOrRaffle="Enter Raffle"
          />
        )}
      />
    </View>
  );
};

export default Raffle;
