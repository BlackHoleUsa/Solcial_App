import React from 'react';
import {ActivityIndicator, FlatList, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import RaffleAuctionCard from '../../components/RaffleAuctionCard';
import Search from '../../components/Search';
import useAuction from '../../hooks/useAuction';
import {styles} from './Styles';
const Auction = ({navigation}) => {
  const {isLoading, data} = useAuction(navigation);
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
              buttonLabel="Enter Auction"
              navigation={navigation}
              itemRoute="Auction Item"
              enteringAuctionOrRaffle="Enter Auction"
              item={item}
            />
          )}
        />
      )}
    </View>
  );
};

export default Auction;
