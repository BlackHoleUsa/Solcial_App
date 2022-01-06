import React from 'react';
import {Text, View} from 'react-native';
import BackgroundVideo from '../../BackgroundVideo';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import RaffleAndAuctionDetailCard from '../../../components/RaffleAndAuctionDetailCard';
const AuctionItemDetail = () => {
  return (
    <BackgroundVideo>
      <View style={styles.container__main}>
        <View style={styles.container__icon}>
          <Icons name="arrow-back-circle" size={40} color={'white'} />
          <Icons name="information-circle-outline" size={40} color={'white'} />
        </View>
        <RaffleAndAuctionDetailCard />
      </View>
    </BackgroundVideo>
  );
};

export default AuctionItemDetail;
