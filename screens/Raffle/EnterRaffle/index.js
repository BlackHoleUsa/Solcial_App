import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import RaffleAmount from './RaffleAmount';
import {styles} from './Styles';

import useEnterRaffle from '../../../hooks/useEnterRaffle';
import useModal from '../../../hooks/useModal';
import RafflePayment from '../../../components/RafflePayment';
import {Button} from 'react-native-paper';
import useRafflePaymentGateway from '../../../hooks/useRafflePaymentGateway';
const EnterRaffle = ({navigation}) => {
  const {
    monthNames,
    noOfTickets,
    selectedRaffleItem,
    handleMinusTicket,
    handlePlusTicket,
  } = useEnterRaffle();
  const {visible, showModal, hideModal} = useModal();

  const {isLoading, handlePayment} = useRafflePaymentGateway(
    '0',
    1,
    navigation,
  );
  const handleEnterRaffle = async () => {
    if (selectedRaffleItem.ticketPrice > 0) {
      showModal();
    } else {
      await handlePayment({});
    }
  };

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
          noOfTickets={selectedRaffleItem.ticketPrice > 0 ? noOfTickets : 1}
          ticketPrice={selectedRaffleItem.ticketPrice}
        />
        <View style={styles.container__price_per_ticket}>
          {selectedRaffleItem.ticketPrice > 0 ? (
            <>
              <Text style={styles.text__price}>
                ${selectedRaffleItem.ticketPrice}{' '}
              </Text>
              <Text style={styles.text__price_per_ticket}>per ticket</Text>
            </>
          ) : (
            <Text style={styles.free_raffle}>It's free to enter raffle</Text>
          )}
        </View>

        <Button
          mode="contained"
          loading={isLoading}
          onPress={handleEnterRaffle}
          style={styles.button}
          labelStyle={{
            color: 'white',
            fontFamily: 'Poppins-Regular',
          }}>
          Enter Raffle
        </Button>
        {/* <TouchableOpacity onPress={() => showModal()} style={styles.button}>
          <Text style={styles.text__button}>Enter Raffle</Text>
        </TouchableOpacity> */}
        <RafflePayment
          visible={visible}
          hideModal={hideModal}
          amount={selectedRaffleItem.ticketPrice * noOfTickets}
          noOfTickets={noOfTickets}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

export default EnterRaffle;
