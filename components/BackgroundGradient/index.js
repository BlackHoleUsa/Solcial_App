import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const BackgroundGradient = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.6}}
      end={{x: 0, y: 1}}
      locations={[0, 0.8]}
      colors={['black', '#45345E']}
      style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default BackgroundGradient;
