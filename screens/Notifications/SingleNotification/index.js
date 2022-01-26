import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Entypo';
const SingleNotification = ({item}) => {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__icon}>
        <Icons name="dot-single" size={50} color="blue" />
      </View>
      <View style={styles.container__text}>
        <Text style={styles.text__notification}>{item.message}</Text>
      </View>
    </View>
  );
};

export default SingleNotification;
