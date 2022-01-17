import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import AuctionTime from './AuctionTime';
import {styles} from './Styles';
import {useSelector} from 'react-redux';
const EnterAuction = ({navigation}) => {
  const selectedRaffleAuctionItem = useSelector(
    state => state.selectedRaffleAuctionItem,
  );
  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <RaffleAuctionImage
        navigation={navigation}
        image={selectedRaffleAuctionItem.product_url[1]}
      />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>{selectedRaffleAuctionItem.name}</Text>
        <Text style={styles.text__description}>
          {selectedRaffleAuctionItem.description}
        </Text>
        <View style={styles.container__raffle_close_time}>
          <Text style={styles.text__auction}>Current Highest Bid: </Text>
          <Text style={styles.text___highest_bid}>$100</Text>
        </View>
        <AuctionTime />
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text__button}>Enter Auction</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EnterAuction;
