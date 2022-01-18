import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomModal from '../../../components/CustomModal';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputField from '../../../components/InputFields';
import {Button} from 'react-native-paper';
import useAuctionBid from '../../../hooks/useAuctionBid';
import {Formik} from 'formik';
export default function AuctionBid({visible, hideModal, highestBid}) {
  const {isLoading, bidValidationSchema, handleAuctionBid} =
    useAuctionBid(highestBid);
  return (
    <CustomModal visible={visible} hideModal={hideModal}>
      <View style={styles.container__main}>
        <TouchableOpacity
          style={styles.container__cross}
          onPress={() => hideModal()}>
          <Icons name="close" color={'black'} size={25} />
        </TouchableOpacity>
        <Text style={styles.text__title}>Auction bid</Text>

        <Formik
          validationSchema={bidValidationSchema}
          initialValues={{bid: ''}}
          onSubmit={values => handleAuctionBid(values)}>
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
                label="Auction Amount"
                textStyle={styles.text__lableStyle}
                onChangeText={handleChange('bid')}
                onBlur={handleBlur('bid')}
                value={values.bid}
                errors={errors.bid}
                inputstyle={styles.input__style}
                keyboardType="numeric"
              />

              <Button
                mode="contained"
                loading={isLoading}
                onPress={handleSubmit}
                style={styles.button__auction}
                labelStyle={{
                  color: 'white',
                  fontFamily: 'Poppins-Regular',
                }}>
                Auction
              </Button>
            </>
          )}
        </Formik>
      </View>
    </CustomModal>
  );
}
