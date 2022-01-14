import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './Styles';
export default function PaymentGateway() {
  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <Text>Payment Gateway</Text>
    </ScrollView>
  );
}
