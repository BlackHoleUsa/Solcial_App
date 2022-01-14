import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/AntDesign';
const RaffleAmount = ({handleMinusTicket, handlePlusTicket, noOfTickets}) => {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__content}>
        <Text style={styles.text__title}>Buy no of tickets</Text>
        <View style={styles.container__amount__buttons}>
          <TouchableOpacity onPress={handleMinusTicket} style={styles.button}>
            <View style={styles.container__button}>
              <Icons name="minus" size={25} color={'black'} />
            </View>
          </TouchableOpacity>
          <Text style={styles.text__amount}>{noOfTickets}</Text>
          <TouchableOpacity onPress={handlePlusTicket} style={styles.button}>
            <View style={styles.container__button}>
              <Icons name="plus" size={25} color={'black'} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RaffleAmount;
