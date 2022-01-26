import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useIsFocused} from '@react-navigation/native';
import CustomStatusBar from '../../components/CustomStatusBar';
const NftMarketplace = ({navigation}) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    navigation.navigate('Home');
  }, [isFocused]);

  return (
    <SafeAreaView>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
    </SafeAreaView>
  );
};

export default NftMarketplace;
