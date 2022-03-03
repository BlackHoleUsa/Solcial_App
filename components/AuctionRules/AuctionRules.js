import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomModal from '../CustomModal';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Styles';
export default function AuctionRules({visible, hideModal}) {
  return (
    <CustomModal visible={visible} hideModal={hideModal}>
      <Text> auction Rules</Text>
      <TouchableOpacity
        style={styles.container__cross}
        onPress={() => hideModal()}>
        <Icons name="close" color={'black'} size={25} />
      </TouchableOpacity>
    </CustomModal>
  );
}
