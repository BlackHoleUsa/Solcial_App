import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Entypo';
const SingleNotification = ({item, showModal}) => {
  return (
    <TouchableOpacity
      style={styles.container__main}
      onPress={() => {
        console.log('pressing');
        if (item.type === 'auctionWin') {
          showModal();
        }
      }}>
      <View style={styles.container__icon}>
        <Icons name="dot-single" size={50} color="blue" />
      </View>
      <View style={styles.container__text}>
        <Text style={styles.text__notification}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleNotification;
