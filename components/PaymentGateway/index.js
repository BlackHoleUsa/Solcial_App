import React from 'react';
import {Modal, View, Text, ScrollView, Alert} from 'react-native';
import {styles} from './Styles';
import InputFields from '../InputFields';
import {Button} from 'react-native-paper';
import CustomModal from '../CustomModal';
export default function PaymentGateway({visible, hideModal}) {
  return (
    <CustomModal visible={visible} hideModal={hideModal}>
      <View style={styles.container__main}>
        <Text>Payment Gateway</Text>
        <InputFields
          label="Card"
          icon="ios-card-outline"
          iconColorBlack
          textStyle={styles.text__title}
        />
        <Button style={{marginTop: 30}} onPress={() => hideModal()}>
          Show
        </Button>
      </View>
    </CustomModal>
  );
}
