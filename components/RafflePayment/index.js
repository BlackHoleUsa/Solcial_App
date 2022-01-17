import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'react-native-paper';
import CustomModal from '../CustomModal';
import InputField from '../InputFields';
import usePaymentGateway from '../../hooks/usePaymentGateway';
import {Formik} from 'formik';
export default function RafflePayment({visible, hideModal, amount}) {
  const {cardValidationSchema, initialValues, isLoading, handlePayment} =
    usePaymentGateway(amount);
  return (
    <CustomModal visible={visible} hideModal={hideModal}>
      <KeyboardAvoidingView>
        <View style={styles.container__main}>
          <TouchableOpacity
            style={styles.container__cross}
            onPress={() => hideModal()}>
            <Icons name="close" color={'black'} size={25} />
          </TouchableOpacity>
          <View style={styles.container__title}>
            <Text style={styles.text__title}>Raffle Payment</Text>
          </View>
          <Formik
            validationSchema={cardValidationSchema}
            initialValues={initialValues}
            onSubmit={values => handlePayment(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <InputField
                  label="Card"
                  icon="ios-card-outline"
                  iconColorBlack
                  textStyle={styles.text__card}
                  inputstyle={styles.text__card}
                  placeholder="424 424 424 424 424"
                  placeholderColor="gray"
                  onChangeText={handleChange('cardNumber')}
                  onBlur={handleBlur('cardNumber')}
                  value={values.cardNumber}
                  errors={errors.cardNumber}
                  keyboardType="number-pad"
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
                          keyboardType="number-pad"
                          onChangeText={handleChange('cardExpMonth')}
                          onBlur={handleBlur('cardExpMonth')}
                          value={values.cardExpMonth}
                        />
                        {errors.cardExpMonth ? (
                          <Text style={styles.text__errors}>
                            {errors.cardExpMonth}
                          </Text>
                        ) : null}
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
                          keyboardType="number-pad"
                          onChangeText={handleChange('cardExpYear')}
                          onBlur={handleBlur('cardExpYear')}
                          value={values.cardExpYear}
                        />
                        {errors.cardExpYear ? (
                          <Text style={styles.text__errors}>
                            {errors.cardExpYear}
                          </Text>
                        ) : null}
                      </View>
                    </View>
                  </View>
                  <View style={styles.container__cvc}>
                    <Text style={styles.text__input}>CVC</Text>
                    <TextInput
                      selectionColor="white"
                      placeholderTextColor="gray"
                      textBreakStrategy="highQuality"
                      placeholder="123"
                      style={styles.input__cvc}
                      keyboardType="number-pad"
                      onChangeText={handleChange('cardCVC')}
                      onBlur={handleBlur('cardCVC')}
                      value={values.cardCVC}
                    />
                    {errors.cardCVC ? (
                      <Text style={styles.text__errors}>{errors.cardCVC}</Text>
                    ) : null}
                  </View>
                </View>
                <Button
                  loading={isLoading}
                  mode="contained"
                  style={styles.button__payment}
                  labelStyle={{
                    color: 'white',
                    fontFamily: 'Poppins-Regular',
                  }}
                  onPress={handleSubmit}>
                  Pay ${amount}
                </Button>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </CustomModal>
  );
}
