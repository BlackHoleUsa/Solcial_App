import React from 'react';
import {Text, View} from 'react-native';
import RaffleAndAuctionDetailCard from '../../../components/RaffleAndAuctionDetailCard';
import BackgroundVideo from '../../BackgroundVideo';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
const RaffleItemDetail = ({navigation}) => {
  const selectedRaffleAuctionItem = useSelector(
    state => state.selectedRaffleAuctionItem,
  );

  return (
    <BackgroundVideo video={selectedRaffleAuctionItem.product_url[0]}>
      <View style={styles.container__main}>
        <View style={styles.container__icon}>
          <Icons
            name="arrow-back-circle"
            size={40}
            color={'white'}
            onPress={() => navigation.goBack()}
          />
          <Icons name="information-circle-outline" size={40} color={'white'} />
        </View>
        <RaffleAndAuctionDetailCard
          title={selectedRaffleAuctionItem.name}
          image={selectedRaffleAuctionItem.product_url[1]}
          description={selectedRaffleAuctionItem.description}
          navigation={navigation}
        />
      </View>
    </BackgroundVideo>
  );
};

export default RaffleItemDetail;
