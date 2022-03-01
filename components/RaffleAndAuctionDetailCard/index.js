import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {styles} from './Styles';
import {Images} from '../../assets/images';
import Icons from 'react-native-vector-icons/Ionicons';

const RaffleAndAuctionDetailCard = ({
  title,
  image,
  description,
  navigation,
  label,
  enterRoute,
}) => {
  const [showCard, setShowCard] = useState(true);

  const handleShowCard = () => {
    setShowCard(!showCard);
  };
  return (
    <View style={styles.container__main}>
      <View
        style={[
          styles.container__card,
          {
            paddingTop: showCard ? 10 : 0,
          },
        ]}>
        <View
          style={[styles.container__icon, {transform: [{translateX: -10}]}]}>
          <Icons
            name={showCard ? 'chevron-down' : 'chevron-up'}
            color={'black'}
            size={25}
            style={styles.icon__down}
            onPress={handleShowCard}
          />
        </View>
        {showCard ? (
          <>
            <View style={styles.container__image}>
              <Image source={{uri: image}} style={styles.image__card} />
            </View>
            <View style={styles.container__content}>
              <View style={styles.container__text}>
                <Text style={styles.text__title}>{title}</Text>
                <ScrollView style={styles.container__description}>
                  <Text style={styles.text__description}>{description}</Text>
                </ScrollView>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(enterRoute);
                }}
                style={styles.button}>
                <Text style={styles.text__button}>Enter {label}</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
      </View>
    </View>
  );
};

export default RaffleAndAuctionDetailCard;
