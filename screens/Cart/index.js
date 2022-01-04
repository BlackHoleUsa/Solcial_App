import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import {styles} from './Styles';
import CustomStatusBar from '../../components/CustomStatusBar';
const Cart = () => {
  const isFocused = useIsFocused();
  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      <Text style={styles.text__title}>Cart</Text>
    </ScrollView>
  );
};

export default Cart;
