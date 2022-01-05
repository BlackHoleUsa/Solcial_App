import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import CustomStatusBar from '../../components/CustomStatusBar';
import {styles} from './Styles';
const Profile = () => {
  const isFocused = useIsFocused();
  return (
    <View style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar
          backgroundColor={'#142A35'}
          barStyle={'light-content'}
        />
      )}
    </View>
  );
};

export default Profile;
