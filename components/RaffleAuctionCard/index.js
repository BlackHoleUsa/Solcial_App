import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './Styles';

import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
const RaffleAuctionCard = ({
  navigation,
  buttonLabel,
  itemRoute,
  enteringAuctionOrRaffle,

  item,
}) => {
  const handleNavigation = () => {
    navigation.navigate(itemRoute);
  };

  return (
    <View style={styles.container__main}>
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
            uri: `${item?.product_url[1]}`,
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
            onPress={() => navigation.navigate(enteringAuctionOrRaffle)}
            style={styles.raffle__button}
            // eslint-disable-next-line react-native/no-inline-styles
            labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
            {buttonLabel}
          </Button>
        </View>
      </View>
    </View>
  );
};

export default RaffleAuctionCard;
