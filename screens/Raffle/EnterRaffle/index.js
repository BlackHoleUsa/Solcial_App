import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import RaffleAmount from './RaffleAmount';
import {styles} from './Styles';

import useEnterRaffle from '../../../hooks/useEnterRaffle';
import useModal from '../../../hooks/useModal';
import RafflePayment from '../../../components/RafflePayment';
const EnterRaffle = ({navigation}) => {
  const {
    monthNames,
    noOfTickets,
    selectedRaffleItem,
    handleMinusTicket,
    handlePlusTicket,
  } = useEnterRaffle();
  const {visible, showModal, hideModal} = useModal();
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
            {monthNames[new Date(selectedRaffleItem.endTime).getMonth()]} at{' '}
            {new Date(selectedRaffleItem.endTime).toLocaleString('en-US', {
              hour: 'numeric',
              hour12: true,
            })}
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

        <TouchableOpacity onPress={() => showModal()} style={styles.button}>
          <Text style={styles.text__button}>Enter Raffle</Text>
        </TouchableOpacity>
        <RafflePayment
          visible={visible}
          hideModal={hideModal}
          amount={selectedRaffleItem.ticketPrice * noOfTickets}
          noOfTickets={noOfTickets}
        />
      </View>
    </ScrollView>
  );
};

export default EnterRaffle;
