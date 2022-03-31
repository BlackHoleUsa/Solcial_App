import {TouchableOpacity, Linking, Alert, View, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';

const CustomTabbarButtom = ({children, onPress}) => {
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

  return (
    <TouchableOpacity
      onPress={handleOpenMetamask}
      style={styles.customTabbarButtom}>
      <View style={styles.view__customTabbarButtom}>{children}</View>
    </TouchableOpacity>
  );
};
export default CustomTabbarButtom;
