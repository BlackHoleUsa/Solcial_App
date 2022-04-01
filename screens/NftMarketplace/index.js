import React, {useEffect} from 'react';

import {useIsFocused} from '@react-navigation/native';
import CustomStatusBar from '../../components/CustomStatusBar';
import CustomModal from '../../components/CustomModal';
import useModal from '../../hooks/useModal';
import {Text, TouchableOpacity, View, Linking, Alert} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {setModalOpen} from '../../redux/actions/actions';
const NftMarketplace = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector(state => state.isModalOpen);

  const handleNavigation = () => {
    dispatch(setModalOpen(false));
  };
  const handleOpenMetamask = async () => {
    const url = 'https://metamask.app.link/dapp/solecialnft.app/';

    try {
      await Linking.openURL(url);
    } catch (error) {
      if (error) {
        Alert.alert(
          'Error',
          'Please install metamask',
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
      }
    }
  };

  const hideModal = () => {
    dispatch(setModalOpen(false));
  };

  return (
    <CustomModal
      visible={isModalOpen}
      hideModal={hideModal}
      style={{backgroundColor: 'black'}}>
      <View style={styles.container__main}>
        <TouchableOpacity
          style={styles.container__cross}
          onPress={handleNavigation}>
          <Icons name="close" color={'black'} size={25} />
        </TouchableOpacity>
        <Text style={styles.text__title}>Attention!</Text>
        <Text style={styles.text__description}>
          By clicking proceed you will be redirected to the Metamask application
          on your device.
        </Text>
        <View>
          <TouchableOpacity
            style={styles.container__button}
            onPress={handleOpenMetamask}>
            <Text style={styles.text__button}>Proceed</Text>
            <Icons name="arrow-right" color={'blue'} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container__button}
            onPress={handleNavigation}>
            <Text style={styles.text__button}>No I want to stay</Text>
            <Icons name="arrow-right" color={'blue'} size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </CustomModal>
  );
};

export default NftMarketplace;
