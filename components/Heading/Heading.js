import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Heading = ({index, heading}) => {
  return (
    <View style={styles.container__main}>
      {index && <Text style={styles.text}>{index}.</Text>}
      <Text style={styles.text}>{heading}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container__main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Heading;
