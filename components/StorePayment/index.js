/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CustomModal from '../CustomModal';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Formik} from 'formik';
import useStorePayment from '../../hooks/useStorePayment';
import {styles} from './Styles';
import {Button} from 'react-native-paper';
import InputField from '../InputFields';
import {number} from 'yup/lib/locale';

export default function StorePayment({visible, hideModal, amount, navigation}) {
  const {
    cardValidationSchema,

    initialValues,
    isLoading,

    handlePayment,
  } = useStorePayment(amount, navigation);

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
            <Text style={styles.text__title}>Store Payment</Text>
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
                <View style={styles.container__errors}>
                  {errors.cardExpMonth ||
                  errors.cardExpYear ||
                  errors.cardCVC ||
                  errors.cardNumber ? (
                    <Text style={styles.text__errors__2}>
                      Please complete the highlighted fields
                    </Text>
                  ) : (
                    // eslint-disable-next-line react/self-closing-comp
                    <Text></Text>
                  )}
                </View>
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
                    <View
                      style={[
                        styles.container__expiryfields,
                        {
                          borderColor:
                            errors.cardExpMonth || errors.cardExpYear
                              ? 'red'
                              : 'black',
                        },
                      ]}>
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
                      style={[
                        styles.input__cvc,
                        {
                          borderColor: errors.cardCVC ? 'red' : 'black',
                        },
                      ]}
                      keyboardType="number-pad"
                      onChangeText={handleChange('cardCVC')}
                      onBlur={handleBlur('cardCVC')}
                      value={values.cardCVC}
                    />
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
