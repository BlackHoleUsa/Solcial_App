/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {StyleSheet} from 'react-native';
import Startup from './Navigation/Startup';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import NftMarketplace from './screens/NftMarketplace';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isModalOpen = useSelector(state => state.isModalOpen);
  return (
    <SafeAreaProvider>
      {isModalOpen ? <NftMarketplace /> : null}
      <Startup />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
