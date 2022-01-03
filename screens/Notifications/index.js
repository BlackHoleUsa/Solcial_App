import React from 'react';
import {StatusBar, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomStatusBar from '../../components/CustomStatusBar';
import {styles} from './Styles';
import {useIsFocused} from '@react-navigation/native';
const Notifications = () => {
  const isFocused = useIsFocused();
  return (
    <View>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      <Text>Notifications screen</Text>
    </View>
  );
};

export default Notifications;
