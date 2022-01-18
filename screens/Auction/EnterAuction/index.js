import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import RaffleAuctionImage from '../../../components/RaffleAuctionImage';
import AuctionTime from './AuctionTime';
import {styles} from './Styles';
import useModal from '../../../hooks/useModal';
import useEnterAuction from '../../../hooks/useEnterAuction';
import AuctionBid from '../AuctionBid';
const EnterAuction = ({navigation}) => {
  const {image, title, description, highestBid, endTime} =
    useEnterAuction(navigation);
  const {visible, showModal, hideModal} = useModal();
  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <RaffleAuctionImage navigation={navigation} image={image} />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>{title}</Text>
        <Text style={styles.text__description}>{description}</Text>

        <View style={styles.container__raffle_close_time}>
          <Text style={styles.text__auction}>Current Highest Bid: </Text>
          <Text style={styles.text___highest_bid}>${highestBid}</Text>
        </View>
        <AuctionTime endTime={endTime} />
        <TouchableOpacity onPress={() => showModal()} style={styles.button}>
          <Text style={styles.text__button}>Enter Auction</Text>
        </TouchableOpacity>
      </View>
      {visible ? (
        <AuctionBid
          visible={visible}
          hideModal={hideModal}
          highestBid={highestBid}
        />
      ) : null}
    </ScrollView>
  );
};

export default EnterAuction;
