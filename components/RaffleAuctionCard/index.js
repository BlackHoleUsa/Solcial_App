import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './Styles';

import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import {
  setSelectedAuctionRaffleItem,
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
      dispatch(setSelectedAuctionRaffleItem(item));
    }
  };

  const handleEnterRaffle = () => {
    navigation.navigate(enteringAuctionOrRaffle);
    if (itemRoute === 'Raffle Item') {
      dispatch(setSelectedRaffleItem(item));
    } else {
      dispatch(setSelectedAuctionRaffleItem(item));
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
        <Text style={styles.text__title}>{item?.name}</Text>
        <View style={styles.container__detail}>
          <View style={styles.text__details__container}>
            <Text style={styles.text__details}>{item?.description}</Text>
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
    </ScrollView>
  );
};

export default RaffleAuctionCard;
