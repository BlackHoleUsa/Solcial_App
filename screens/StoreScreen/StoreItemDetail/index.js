import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';

import Carousel from './Carousel';
import {Button} from 'react-native-paper';
import useStoreItemDetail from '../../../hooks/useStoreItemDetail';

const StoreItemDetail = ({navigation}) => {
  const {
    title,
    description,
    sizes,
    price,
    images,
    addToCart,
    sizeIndex,
    setSizeIndex,
  } = useStoreItemDetail(navigation);
  return (
    <ScrollView contentContainerStyle={styles.container__main}>
      <Carousel images={images} />
      <View style={styles.container__content}>
        <Text style={styles.text__title}>{title}</Text>
        <Text style={styles.text__description}>{description}</Text>
        <Text style={styles.text__price}>Price ${price}</Text>
        <View style={styles.container__size}>
          <Text style={styles.text__size}>Size:</Text>
          {sizes.map((item, index) => (
            <View
              key={index}
              style={[
                styles.container__size__buttons,
                {
                  backgroundColor: sizeIndex === index ? 'black' : 'white',
                },
              ]}>
              <TouchableOpacity
                onPress={() => {
                  console.log(index);
                  setSizeIndex(index);
                }}>
                <Text
                  style={[
                    styles.text__size__button,
                    {
                      color: sizeIndex === index ? 'white' : 'black',
                    },
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Button
          mode="contained"
          onPress={() => addToCart()}
          style={styles.button__checkout}
          labelStyle={{color: 'white', fontFamily: 'Poppins-Regular'}}>
          Add To Cart
        </Button>
      </View>
    </ScrollView>
  );
};

export default StoreItemDetail;
