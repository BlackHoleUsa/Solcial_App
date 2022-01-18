import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomModal from '../../../components/CustomModal';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function AuctionBid({visible, hideModal}) {
  return (
    <CustomModal visible={visible} hideModal={hideModal}>
      <View style={styles.container__main}>
        <TouchableOpacity
          style={styles.container__cross}
          onPress={() => hideModal()}>
          <Icons name="close" color={'black'} size={25} />
        </TouchableOpacity>
        <Text>Auction bid</Text>
      </View>
    </CustomModal>
  );
}
