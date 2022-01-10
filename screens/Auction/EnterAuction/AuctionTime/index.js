import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Styles';

const AuctionTime = () => {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__content}>
        <Text style={styles.text__title}>Auction Ending in</Text>
        <View style={styles.container__time}>
          <View style={styles.container__time_item}>
            <Text style={styles.text__time_title}>12</Text>
            <Text style={styles.text__time_type}>Days</Text>
          </View>
          <View style={styles.container__time_item}>
            <Text style={styles.text__time_title}>17</Text>
            <Text style={styles.text__time_type}>Hours</Text>
          </View>
          <View style={styles.container__time_item}>
            <Text style={styles.text__time_title}>04</Text>
            <Text style={styles.text__time_type}>Min</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AuctionTime;
