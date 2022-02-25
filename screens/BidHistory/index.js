import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';

import {styles} from './Styles';

import useBidHistory from '../../hooks/useBidHistory';
import StoreHistoryItem from '../../components/StoreHistoryItem';
export default function BidHistory() {
  const {isFocused, isLoading, data} = useBidHistory();
  return (
    <View style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      {isLoading ? (
        <View style={styles.container__loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <View style={styles.container__content}>
          <View style={styles.container__text}>
            <Text style={styles.text__title}>Store History</Text>
          </View>
          <View style={styles.container__list}>
            <FlatList
              data={data}
              horizontal={false}
              keyExtractor={item => item.id}
              ListFooterComponent={<View></View>}
              ListFooterComponentStyle={{marginVertical: 50}}
              renderItem={({item}) => <StoreHistoryItem item={item} />}
            />
          </View>
        </View>
      )}
    </View>
  );
}
