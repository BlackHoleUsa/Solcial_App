import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/AntDesign';
const RaffleAmount = ({
  handleMinusTicket,
  handlePlusTicket,
  noOfTickets,
  ticketPrice,
}) => {
  return (
    <View style={styles.container__main}>
      <View
        style={[
          styles.container__content,
          {justifyContent: ticketPrice > 0 ? 'space-between' : 'center'},
        ]}>
        <Text style={styles.text__title}>
          {ticketPrice > 0 ? 'Buy no of tickets' : 'Number of ticket:'}
        </Text>
        <View style={styles.container__amount__buttons}>
          {ticketPrice > 0 ? (
            <TouchableOpacity onPress={handleMinusTicket} style={styles.button}>
              <View style={styles.container__button}>
                <Icons name="minus" size={25} color={'black'} />
              </View>
            </TouchableOpacity>
          ) : null}
          <Text style={[styles.text__amount, {marginTop: 10}]}>
            {noOfTickets}
          </Text>
          {ticketPrice > 0 ? (
            <TouchableOpacity onPress={handlePlusTicket} style={styles.button}>
              <View style={styles.container__button}>
                <Icons name="plus" size={25} color={'black'} />
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default RaffleAmount;
