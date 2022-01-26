import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Entypo';
const SingleNotification = ({item}) => {
  console.log(item);
  return (
    <View style={styles.container__main}>
      <Icons name="dot-single" size={50} color="blue" />
      <Text style={styles.text__notification}>
        this is dummy notification for test and do not hold any meaning
        whatsoever.
      </Text>
    </View>
  );
};

export default SingleNotification;
