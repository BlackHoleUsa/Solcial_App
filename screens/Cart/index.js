import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import {styles} from './Styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import CartItemCard from './CartItemCard';
import uuid from 'react-native-uuid';
import StorePayment from '../../components/StorePayment';
import useModal from '../../hooks/useModal';

const cartScreen = [
  {
    id: uuid.v4(),
  },
  {
    id: uuid.v4(),
  },
  {
    id: uuid.v4(),
  },
  {
    id: uuid.v4(),
  },
  {
    id: uuid.v4(),
  },
  {
    id: uuid.v4(),
  },
];

const Cart = () => {
  const isFocused = useIsFocused();
  const {visible, hideModal, showModal} = useModal(0);
  return (
    <View style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      <Text style={styles.text__title}>Cart</Text>

      <View style={styles.container__flatList}>
        <FlatList
          data={cartScreen}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CartItemCard />}
        />
      </View>
      <View style={styles.container__totalAmount}>
        <Text style={styles.text__total}>Total:</Text>
        <Text style={styles.text__totalAmount}>$123</Text>
      </View>
      <Button
        mode="contained"
        onPress={() => {
          showModal();
        }}
        style={styles.checkout__button}
        labelStyle={{color: 'white', fontFamily: 'Poppins-Regular'}}>
        Checkout
      </Button>
      <StorePayment visible={visible} hideModal={hideModal} amount={20} />
    </View>
  );
};

export default Cart;
