import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './Styles';
import {Images} from '../../../assets/images';
import {Button} from 'react-native-paper';
const RaffleCard = ({navigation}) => {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__image}>
        <Image source={Images.cardImage} />
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
            labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
            Enter Raffles
          </Button>
        </View>
      </View>
    </View>
  );
};

export default RaffleCard;
