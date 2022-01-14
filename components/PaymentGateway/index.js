import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './Styles';
import InputFields from '../InputFields';
import {Portal, Modal, Button} from 'react-native-paper';
export default function PaymentGateway({visible, hideModal, showModal}) {
  return (
    <Portal contentContainerStyle={styles.container__main}>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container__main}>
        <Text>Payment Gateway</Text>
        <InputFields label="Card" icon="ios-card-outline" iconColorBlack />
        <Button style={{marginTop: 30}} onPress={showModal}>
          Show
        </Button>
      </Modal>
    </Portal>
  );
}
