import React from 'react';
import {Alert, FlatList, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import {styles} from './Styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import CartItemCard from './CartItemCard';

import StorePayment from '../../components/StorePayment';
import useModal from '../../hooks/useModal';
import useCart from '../../hooks/useCart';

const Cart = ({navigation}) => {
  console.log(navigation);
  const isFocused = useIsFocused();
  const {visible, hideModal, showModal} = useModal();
  const {cart, totalSum} = useCart();
  return (
    <View style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      <Text style={styles.text__title}>Cart</Text>

      <View style={styles.container__flatList}>
        <FlatList
          data={cart}
          horizontal={false}
          ListFooterComponent={<View></View>}
          ListFooterComponentStyle={{marginVertical: 50}}
          keyExtractor={item => item._id}
          renderItem={({item}) => <CartItemCard item={item} />}
        />
      </View>
      <View style={styles.container__totalAmount}>
        <Text style={styles.text__total}>Total:</Text>
        <Text style={styles.text__totalAmount}>${totalSum}</Text>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          if (totalSum === 0) {
            Alert.alert(
              'Error',
              'No Item Present in the Cart',
              [
                {
                  text: 'Cancel',

                  style: 'cancel',
                },
              ],
              {
                cancelable: true,
              },
            );
          } else {
            showModal();
          }
        }}
        style={styles.checkout__button}
        labelStyle={{color: 'white', fontFamily: 'Poppins-Regular'}}>
        Checkout
      </Button>
      <StorePayment
        visible={visible}
        hideModal={hideModal}
        amount={totalSum}
        navigation={navigation}
      />
    </View>
  );
};

export default Cart;
