import React from 'react';
import {ActivityIndicator, FlatList, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import RaffleAuctionCard from '../../components/RaffleAuctionCard';
import Search from '../../components/Search';
import useAuction from '../../hooks/useAuction';
import {styles} from './Styles';

const Auction = ({navigation}) => {
  const {isLoading, data, listRefresh, setListRefresh} = useAuction(navigation);

  return (
    <View style={styles.container__main}>
      <View style={styles.container__search}>
        <Search />
      </View>
      {isLoading ? (
        <View style={styles.container__loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <FlatList
          onRefresh={() => setListRefresh(true)}
          refreshing={listRefresh}
          data={data}
          horizontal={false}
          keyExtractor={item => item._id}
          ListFooterComponent={<View></View>}
          ListFooterComponentStyle={{marginVertical: 50}}
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
