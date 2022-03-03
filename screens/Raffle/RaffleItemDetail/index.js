import React from 'react';
import {View} from 'react-native';
import RaffleAndAuctionDetailCard from '../../../components/RaffleAndAuctionDetailCard';
import BackgroundVideo from '../../BackgroundVideo';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import useModal from '../../../hooks/useModal';
import RaffleRules from '../../../components/RaffleRules/RaffleRules';
const RaffleItemDetail = ({navigation}) => {
  const selectedRaffleItem = useSelector(state => state.selectedRaffleItem);
  const {visible, showModal, hideModal} = useModal();
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
          <Icons
            name="information-circle-outline"
            size={40}
            color={'white'}
            onPress={() => showModal()}
          />
        </View>
        <RaffleAndAuctionDetailCard
          title={selectedRaffleItem.name}
          image={selectedRaffleItem.product_url[1]}
          description={selectedRaffleItem.description}
          navigation={navigation}
          enterRoute="Enter Raffle"
          label="Raffle"
        />
        <RaffleRules visible={visible} hideModal={hideModal} />
      </View>
    </BackgroundVideo>
  );
};

export default RaffleItemDetail;
