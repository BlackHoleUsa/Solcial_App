import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Entypo';
const SingleNotification = ({
  item,
  showModal,
  setAmount,
  setId,
  setNotificationId,
}) => {
  const handleAmount = () => {
    if (!item.extraData.Auction.payable) {
      showModal();
    }

    // split the string by space
    const data = item.message.split(' ');

    if (data.indexOf('amount') > 0) {
      setAmount(data[data.indexOf('amount') + 1].slice(0, -1).split('$')[1]);
      setId(item.extraData.Auction._id);
      setNotificationId(item._id);
    }
  };

  return (
    <TouchableOpacity
      style={styles.container__main}
      onPress={() => {
        if (item.type === 'auctionWin') {
          handleAmount();
        }
      }}>
      <View style={styles.container__icon}>
        <Icons name="dot-single" size={50} color="blue" />
      </View>
      <View style={styles.container__text}>
        <Text style={styles.text__notification}>{item?.message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleNotification;
