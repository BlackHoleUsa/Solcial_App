import React from 'react';
import {Text, View} from 'react-native';
import BackgroundGradient from '../../components/BackgroundGradient';
import {styles} from './Styles';
const Signup = () => {
  return (
    <BackgroundGradient>
      <Text style={styles.text__welcome}>Welocome to SOLEcial app!</Text>
    </BackgroundGradient>
  );
};

export default Signup;
