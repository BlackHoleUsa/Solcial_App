import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import RaffleAmount from './RaffleAmount';
import {styles} from './Styles';

import useEnterRaffle from '../../../hooks/useEnterRaffle';
import {Button} from 'react-native-paper';

const EnterRaffle = ({navigation}) => {
  const {
    monthNames,
    noOfTickets,
    selectedRaffleItem,
    handleMinusTicket,
    handlePlusTicket,
    initializePaymentSheet,
    loading,
  } = useEnterRaffle();

  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <RaffleAuctionImage
        image={selectedRaffleItem.product_url[1]}
        navigation={navigation}
      />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>{selectedRaffleItem.name}</Text>
        <Text style={styles.text__description}>
          {selectedRaffleItem.description}
        </Text>
        <View style={styles.container__raffle_close_time}>
          <Text style={styles.text__raffle_close_on}>Raffle Close on: </Text>
          <Text style={styles.text__raffle_close_time}>
            {new Date(selectedRaffleItem.endTime).getDate()}{' '}
            {monthNames[new Date(selectedRaffleItem.endTime).getMonth()]}{' '}
            {new Date(selectedRaffleItem.endTime).getFullYear()}
          </Text>
        </View>
        <RaffleAmount
          handleMinusTicket={handleMinusTicket}
          handlePlusTicket={handlePlusTicket}
          noOfTickets={noOfTickets}
        />
        <View style={styles.container__price_per_ticket}>
          <Text style={styles.text__price}>
            ${selectedRaffleItem.ticketPrice}{' '}
          </Text>
          <Text style={styles.text__price_per_ticket}>per ticket</Text>
        </View>
        <Button
          mode="contained"
          loading={loading}
          onPress={initializePaymentSheet}
          style={styles.button}
          // eslint-disable-next-line react-native/no-inline-styles
          labelStyle={{
            color: 'white',
            fontFamily: 'Poppins-Regular',
          }}>
          Enter Raffle
        </Button>
      </View>
    </ScrollView>
  );
};

export default EnterRaffle;
