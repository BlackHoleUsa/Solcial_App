import React from 'react';
import {View, Text, KeyboardAvoidingView, TextInput} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import CustomModal from '../CustomModal';
import InputField from '../InputFields';
export default function PaymentGateway({visible, hideModal}) {
  return (
    <CustomModal visible={visible} hideModal={hideModal}>
      <KeyboardAvoidingView>
        <View style={styles.container__main}>
          <View style={styles.container__title}>
            <Text style={styles.text__title}>Raffle Payment</Text>
          </View>
          <InputField
            label="Card"
            icon="ios-card-outline"
            iconColorBlack
            textStyle={styles.text__card}
            placeholder="424 424 424 424 424"
            placeholderColor="gray"
          />
          <View style={styles.container__expiry_cvc}>
            <View style={styles.container__expiryDate}>
              <Text style={styles.text__input}>Expiry Date</Text>
              <View style={styles.container__expiryfields}>
                <View style={styles.input__fields}>
                  <TextInput
                    selectionColor="white"
                    placeholderTextColor="gray"
                    textBreakStrategy="highQuality"
                    placeholder="12"
                    style={styles.input__style}
                  />
                </View>
                <View>
                  <Icons name="slash-forward" size={25} color={'black'} />
                </View>
                <View style={styles.input__fields}>
                  <TextInput
                    selectionColor="white"
                    placeholderTextColor="gray"
                    textBreakStrategy="highQuality"
                    placeholder="22"
                    style={styles.input__style}
                  />
                </View>
              </View>
            </View>
            <View style={styles.container__cvc}>
              <Text style={styles.text__input}>CVC</Text>
              <TextInput
                selectionColor="white"
                placeholderTextColor="gray"
                textBreakStrategy="highQuality"
                placeholder="22"
                style={styles.input__cvc}
              />
            </View>
          </View>
          <Button
            mode="contained"
            style={styles.button__payment}
            labelStyle={{
              color: 'white',
              fontFamily: 'Poppins-Regular',
            }}
            onPress={() => hideModal()}>
            Pay
          </Button>
        </View>
      </KeyboardAvoidingView>
    </CustomModal>
  );
}
