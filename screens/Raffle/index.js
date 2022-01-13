import React from 'react';
import {FlatList, ScrollView, View, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import RaffleAuctionCard from '../../components/RaffleAuctionCard';
import Search from '../../components/Search';
import {storeScreen} from '../../assets/Data';
import useRaffle from '../../hooks/useRaffle';
const Raffle = ({navigation}) => {
  const {isLoading, data} = useRaffle(navigation);

  return (
    <View style={styles.container__main}>
      <Search />
      {isLoading ? (
        <View style={styles.container__loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <FlatList
          data={data}
          horizontal={false}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <RaffleAuctionCard
              buttonLabel="Enter Raffel"
              navigation={navigation}
              itemRoute="Raffle Item"
              enteringAuctionOrRaffle="Enter Raffle"
              item={item}
            />
          )}
        />
      )}
    </View>
  );
};

export default Raffle;
