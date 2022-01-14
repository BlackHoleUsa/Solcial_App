import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import RaffleAmount from './RaffleAmount';
import {styles} from './Styles';
import {useSelector} from 'react-redux';
const EnterRaffle = ({navigation}) => {
  const selectedRaffleAuctionItem = useSelector(
    state => state.selectedRaffleAuctionItem,
  );
  const [noOfTickets, setNoOfTickets] = useState(0);
  const handleMinusTicket = () => {
    if (noOfTickets < 1) {
      setNoOfTickets(0);
    } else {
      setNoOfTickets(noOfTickets - 1);
    }
  };
  const handlePlusTicket = () => {
    setNoOfTickets(noOfTickets + 1);
  };
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
      <RaffleAuctionImage
        image={selectedRaffleAuctionItem.product_url[1]}
        navigation={navigation}
      />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>{selectedRaffleAuctionItem.name}</Text>
        <Text style={styles.text__description}>
          {selectedRaffleAuctionItem.description}
        </Text>
        <View style={styles.container__raffle_close_time}>
          <Text style={styles.text__raffle_close_on}>Raffle Close on: </Text>
          <Text style={styles.text__raffle_close_time}>
            {new Date(selectedRaffleAuctionItem.endTime).getDate()}{' '}
            {monthNames[new Date(selectedRaffleAuctionItem.endTime).getMonth()]}{' '}
            at{' '}
            {new Date(selectedRaffleAuctionItem.endTime).toLocaleString(
              'en-US',
              {
                hour: 'numeric',
                hour12: true,
              },
            )}
          </Text>
        </View>
        <RaffleAmount
          handleMinusTicket={handleMinusTicket}
          handlePlusTicket={handlePlusTicket}
          noOfTickets={noOfTickets}
        />
        <View style={styles.container__price_per_ticket}>
          <Text style={styles.text__price}>
            ${selectedRaffleAuctionItem.ticketPrice}{' '}
          </Text>
          <Text style={styles.text__price_per_ticket}>per ticket</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Raffle Payment');
          }}
          style={styles.button}>
          <Text style={styles.text__button}>Enter Raffle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EnterRaffle;
