import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './Styles';
const EnterRaffle = () => {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__image}>
        <Image style={styles.image} />
      </View>
      <View style={styles.container__content}>
        <Text style={styles.text__title}>Soccer Jacket</Text>
      </View>
    </View>
  );
};

export default EnterRaffle;
