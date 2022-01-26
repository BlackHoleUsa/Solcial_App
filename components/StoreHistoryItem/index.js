import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Entypo';
export default function StoreHistoryItem() {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__icon}>
        <Icons name="dot-single" size={50} color="blue" />
      </View>
      <View style={styles.container__text}>
        <Text style={styles.text__notification}>store item</Text>
      </View>
    </View>
  );
}
