import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

import CustomStatusBar from '../../components/CustomStatusBar';
import {styles} from './Styles';
import {useIsFocused} from '@react-navigation/native';
const Notifications = () => {
  const isFocused = useIsFocused();
  return (
    <View style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      <Text style={styles.heading__main}>Notifications </Text>
    </View>
  );
};

export default Notifications;
