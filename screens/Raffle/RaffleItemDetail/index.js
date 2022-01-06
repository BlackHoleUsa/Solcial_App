import React from 'react';
import {Text, View} from 'react-native';
import RaffleAndAuctionDetailCard from '../../../components/RaffleAndAuctionDetailCard';
import BackgroundVideo from '../../BackgroundVideo';

const RaffleItemDetail = () => {
  return (
    <BackgroundVideo>
      <RaffleAndAuctionDetailCard />
    </BackgroundVideo>
  );
};

export default RaffleItemDetail;
