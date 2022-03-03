import React from 'react';
import {View} from 'react-native';
import BackgroundVideo from '../../BackgroundVideo';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
import RaffleAndAuctionDetailCard from '../../../components/RaffleAndAuctionDetailCard';
import {useSelector} from 'react-redux';
import useModal from '../../../hooks/useModal';
import AuctionRules from '../../../components/AuctionRules/AuctionRules';
const AuctionItemDetail = ({navigation}) => {
  const selectedAuctionItem = useSelector(state => state.selectedAuctionItem);
  const {visible, showModal, hideModal} = useModal();
  return (
    <BackgroundVideo video={selectedAuctionItem.product_url[0]}>
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
          navigation={navigation}
          title={selectedAuctionItem.name}
          description={selectedAuctionItem.description}
          image={selectedAuctionItem.product_url[1]}
          enterRoute="Enter Auction"
          label="Auction"
        />
      </View>
      <AuctionRules visible={visible} hideModal={hideModal} />
    </BackgroundVideo>
  );
};

export default AuctionItemDetail;
