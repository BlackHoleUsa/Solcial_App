import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Styles';
import useAuctionTime from '../../../../hooks/useAuctionTime';
const AuctionTime = ({endTime, setEndAuction}) => {
  const {day, hour, min} = useAuctionTime(endTime);
  if (day < 0 || hour < 0 || min < 0) {
    setEndAuction(true);
  } else {
    setEndAuction(false);
  }
  return (
    <View style={styles.container__main}>
      <View style={styles.container__content}>
        <Text style={styles.text__title}>Auction Ending in</Text>
        <View style={styles.container__time}>
          <View style={styles.container__time_item}>
            <Text style={styles.text__time_title}>{day}</Text>
            <Text style={styles.text__time_type}>Days</Text>
          </View>
          <View style={styles.container__time_item}>
            <Text style={styles.text__time_title}>{hour}</Text>
            <Text style={styles.text__time_type}>Hours</Text>
          </View>
          <View style={styles.container__time_item}>
            <Text style={styles.text__time_title}>{min}</Text>
            <Text style={styles.text__time_type}>Min</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AuctionTime;
