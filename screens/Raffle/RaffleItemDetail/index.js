import React from 'react';
import {View} from 'react-native';
import RaffleAndAuctionDetailCard from '../../../components/RaffleAndAuctionDetailCard';
import BackgroundVideo from '../../BackgroundVideo';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
const RaffleItemDetail = ({navigation}) => {
  const selectedRaffleItem = useSelector(state => state.selectedRaffleItem);

  return (
    <BackgroundVideo video={selectedRaffleItem.product_url[0]}>
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
          title={selectedRaffleItem.name}
          image={selectedRaffleItem.product_url[1]}
          description={selectedRaffleItem.description}
          navigation={navigation}
          enterRoute="Enter Raffle"
          label="Raffle"
        />
      </View>
    </BackgroundVideo>
  );
};

export default RaffleItemDetail;
