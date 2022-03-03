/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {FlatList, View, ActivityIndicator, Text} from 'react-native';

import {styles} from './Styles';
import RaffleAuctionCard from '../../components/RaffleAuctionCard';
import Search from '../../components/Search';

import useRaffle from '../../hooks/useRaffle';
const Raffle = ({navigation}) => {
  const {
    isLoading,
    listRefresh,
    data,
    setListRefresh,

    displayedData,
    setDisplayedData,
  } = useRaffle(navigation);
  console.log('data', displayedData);
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
          keyExtractor={item => item.id}
          initialNumToRender={5}
          ListEmptyComponent={
            <View style={styles.container__empty}>
              <Text style={styles.text__empty}>No Item Found</Text>
            </View>
          }
          ListFooterComponent={<View></View>}
          ListFooterComponentStyle={{marginVertical: 50}}
          renderItem={({item}) => (
            <RaffleAuctionCard
              buttonLabel="Enter Raffle"
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
