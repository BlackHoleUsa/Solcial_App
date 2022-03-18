import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './Styles';

import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

import {
  setSelectedAuctionItem,
  setSelectedRaffleItem,
} from '../../redux/actions/actions';
import useModal from '../../hooks/useModal';
import RaffleRules from '../RaffleRules/RaffleRules';
import AuctionRules from '../AuctionRules/AuctionRules';
const RaffleAuctionCard = ({
  navigation,
  buttonLabel,
  itemRoute,
  enteringAuctionOrRaffle,

  item,
}) => {
  const dispatch = useDispatch();
  const {visible, showModal, hideModal} = useModal();
  const [rulesModal, setRulesModal] = useState(false);
  const handleNavigation = () => {
    navigation.navigate(itemRoute);
    if (itemRoute === 'Raffle Item') {
      dispatch(setSelectedRaffleItem(item));
    } else {
      dispatch(setSelectedAuctionItem(item));
    }
  };

  const handleEnterRaffle = () => {
    navigation.navigate(enteringAuctionOrRaffle);
    if (itemRoute === 'Raffle Item') {
      dispatch(setSelectedRaffleItem(item));
    } else {
      dispatch(setSelectedAuctionItem(item));
    }
  };

  const handleDisplayRules = () => {
    showModal();
    if (itemRoute === 'Raffle Item') {
      setRulesModal(true);
    } else {
      setRulesModal(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={handleDisplayRules}>
          <Icons
            name="ios-information-circle-outline"
            size={30}
            color={'black'}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={handleNavigation}
        style={styles.container__image}>
        <Image
          style={styles.image}
          source={{
            uri: item?.product_url[1],
          }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View style={styles.container__content}>
        <View style={styles.container__detail}>
          <View style={styles.container__title}>
            <Text style={styles.text__title}>{item?.name}</Text>
          </View>
          <Button
            mode="outlined"
            onPress={handleEnterRaffle}
            style={styles.raffle__button}
            // eslint-disable-next-line react-native/no-inline-styles
            labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
            {buttonLabel}
          </Button>
        </View>
      </View>
      {rulesModal ? (
        <RaffleRules visible={visible} hideModal={hideModal} />
      ) : (
        <AuctionRules visible={visible} hideModal={hideModal} />
      )}
    </ScrollView>
  );
};

export default RaffleAuctionCard;
