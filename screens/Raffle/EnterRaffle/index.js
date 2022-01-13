import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import RaffleAmount from './RaffleAmount';
import {styles} from './Styles';
const EnterRaffle = ({route, navigation}) => {
  const {id, title, description, image, endTime, price} = route.params;
  const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <RaffleAuctionImage image={image} navigation={navigation} />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>{title}</Text>
        <Text style={styles.text__description}>{description}</Text>
        <View style={styles.container__raffle_close_time}>
          <Text style={styles.text__raffle_close_on}>Raffle Close on: </Text>
          <Text style={styles.text__raffle_close_time}>
            {endTime.getDate()} {monthNames[endTime.getMonth()]} at{' '}
            {endTime.toLocaleString('en-US', {hour: 'numeric', hour12: true})}
          </Text>
        </View>
        <RaffleAmount />
        <View style={styles.container__price_per_ticket}>
          <Text style={styles.text__price}>${price} </Text>
          <Text style={styles.text__price_per_ticket}>per ticket</Text>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text__button}>Enter Raffle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EnterRaffle;
