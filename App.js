/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet} from 'react-native';
import Startup from './Navigation/Startup';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomStatusBar from './components/CustomStatusBar';
import {Text} from 'react-native-paper';

const App = () => {
  return (
    <SafeAreaProvider>
      <Startup />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
