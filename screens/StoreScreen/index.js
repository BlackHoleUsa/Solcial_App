import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import Search from '../../components/Search';
const StoreScreen = () => {
  return (
    <ScrollView style={styles.container__main}>
      <Search />
    </ScrollView>
  );
};

export default StoreScreen;
