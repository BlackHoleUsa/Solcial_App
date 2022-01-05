import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import {styles} from './Styles';
import CustomStatusBar from '../../components/CustomStatusBar';
import CartItemCard from './CartItemCard';
import uuid from 'react-native-uuid';

const cartScreen = [
  {
    id: uuid.v4(),
  },
  {
    id: uuid.v4(),
  },
];

const Cart = () => {
  const isFocused = useIsFocused();
  return (
    <View style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      <Text style={styles.text__title}>Cart</Text>

      <View>
        <FlatList
          data={cartScreen}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CartItemCard />}
        />
      </View>
    </View>
  );
};

export default Cart;
