import {TouchableOpacity, Linking, Alert, View, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {useDispatch} from 'react-redux';
import {setModalOpen} from '../../redux/actions/actions';
const CustomTabbarButtom = ({children, onPress}) => {
  const dispatch = useDispatch();
  const handleOpenMetamask = async () => {
    dispatch(setModalOpen(true));
  };

  return (
    <TouchableOpacity
      onPress={handleOpenMetamask}
      style={styles.customTabbarButtom}>
      <View style={styles.view__customTabbarButtom}>{children}</View>
    </TouchableOpacity>
  );
};
export default CustomTabbarButtom;
