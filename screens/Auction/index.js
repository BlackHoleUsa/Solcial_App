/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, FlatList, View, Text} from 'react-native';

import RaffleAuctionCard from '../../components/RaffleAuctionCard';
import Search from '../../components/Search';
import useAuction from '../../hooks/useAuction';
import {styles} from './Styles';

const Auction = ({navigation}) => {
  const {
    isLoading,
    data,
    displayedData,
    listRefresh,
    setDisplayedData,
    setListRefresh,
  } = useAuction(navigation);

  return (
    <View style={styles.container__main}>
      <View style={styles.container__search}>
        <Search
          data={displayedData}
          setData={setDisplayedData}
          originalData={data}
        />
      </View>
      {isLoading ? (
        <View style={styles.container__loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <FlatList
          onRefresh={() => setListRefresh(true)}
          refreshing={listRefresh}
          data={displayedData}
          horizontal={false}
          initialNumToRender={5}
          keyExtractor={item => item._id}
          ListEmptyComponent={
            <View style={styles.container__empty}>
              <Text style={styles.text__empty}>No Item Found</Text>
            </View>
          }
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
