import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './Styles';

import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import {
  setSelectedAuctionItem,
  setSelectedRaffleItem,
} from '../../redux/actions/actions';
const RaffleAuctionCard = ({
  navigation,
  buttonLabel,
  itemRoute,
  enteringAuctionOrRaffle,

  item,
}) => {
  const dispatch = useDispatch();

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

  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <View style={styles.icon}>
        <Icons
          name="ios-information-circle-outline"
          size={30}
          color={'black'}
        />
      </View>
      <TouchableOpacity
        onPress={handleNavigation}
        style={styles.container__image}>
        <Image
          style={styles.image}
          source={{
            uri: item?.product_url[1],
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.container__content}>
        <View style={styles.container__detail}>
          <Text style={styles.text__title}>{item?.name}</Text>
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
    </ScrollView>
  );
};

export default RaffleAuctionCard;
