import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './Styles';
import {Images} from '../../assets/images';
import {Button} from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
const RaffleAuctionCard = ({navigation, buttonLabel}) => {
  return (
    <View style={styles.container__main}>
      <View style={styles.icon}>
        <Icons
          name="ios-information-circle-outline"
          size={30}
          color={'black'}
        />
      </View>
      <View style={styles.container__image}>
        <Image source={Images.cardImage} style={styles.image} />
      </View>
      <View style={styles.container__content}>
        <Text style={styles.text__title}>Soccer Jacket</Text>
        <View style={styles.container__detail}>
          <View style={styles.text__details__container}>
            <Text style={styles.text__details}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('Main App')}
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
