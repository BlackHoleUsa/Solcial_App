import React, {useEffect} from 'react';

import {useIsFocused} from '@react-navigation/native';
import CustomStatusBar from '../../components/CustomStatusBar';
import CustomModal from '../../components/CustomModal';
import useModal from '../../hooks/useModal';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../StoreScreen/Styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const NftMarketplace = ({navigation}) => {
  const {visible, showModal, hideModal} = useModal();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      showModal();
    }
  }, [isFocused]);
  const handleNavigation = () => {
    hideModal();
    navigation.goBack();
  };
  return (
    <CustomModal
      visible={visible}
      hideModal={hideModal}
      style={{backgroundColor: 'black'}}>
      <View style={styles.container__main}>
        <TouchableOpacity
          style={styles.container__cross}
          onPress={handleNavigation}>
          <Icons name="close" color={'black'} size={25} />
        </TouchableOpacity>
      </View>
    </CustomModal>
  );
};

export default NftMarketplace;
