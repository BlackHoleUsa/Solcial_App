import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import Search from '../../components/Search';
import StoreCard from '../../components/StoreCard';
const StoreScreen = () => {
  return (
    <ScrollView style={styles.container__main}>
      <Search />
      <StoreCard />
    </ScrollView>
  );
};

export default StoreScreen;
