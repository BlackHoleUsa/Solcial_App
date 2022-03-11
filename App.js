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
import {StripeProvider} from '@stripe/stripe-react-native';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <StripeProvider
      publishableKey="pk_test_51JiCUhGno5HRfYG6g0ihC2STUzIBpqcCJ2sKghEYgr7NCuDncO1XAqahK6Czzv5ieGPqS141GGbCCOTxIKxY7R59005Vj2kcTd"
      merchantIdentifier="merchant.identifier">
      <SafeAreaProvider>
        <Startup />
      </SafeAreaProvider>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
