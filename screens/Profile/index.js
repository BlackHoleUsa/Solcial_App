import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import CustomStatusBar from '../../components/CustomStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Styles';
import Accordian from '../../components/Accordian';
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
      <View style={styles.container__accordian}>
        <Accordian title="Edit Profile" />
        <Accordian title="Auction History" />
        <Accordian title="Raffle History" />
        <Accordian title="Store History" />
      </View>
    </View>
  );
};

export default Profile;
