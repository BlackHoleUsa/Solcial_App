import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import CustomStatusBar from '../../components/CustomStatusBar';

import {styles} from './Styles';
import useAuctionHistory from '../../hooks/useAuctionHistory';
import SingleNotification from '../Notifications/SingleNotification';
export default function AuctionHistory() {
  const {isFocused, isLoading, data} = useAuctionHistory();
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
            <Text style={styles.text__title}>Auction History</Text>
          </View>
          <View style={styles.container__list}>
            <FlatList
              data={data}
              horizontal={false}
              keyExtractor={item => item._id}
              ListFooterComponent={<View></View>}
              ListFooterComponentStyle={{marginVertical: 150}}
              renderItem={({item}) => <SingleNotification item={item} />}
            />
          </View>
        </View>
      )}
    </View>
  );
}
