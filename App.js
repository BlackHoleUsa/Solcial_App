/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import Startup from './Navigation/Startup';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaProvider>
      <Startup />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
