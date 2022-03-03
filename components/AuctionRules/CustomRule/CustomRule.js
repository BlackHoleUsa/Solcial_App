/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CustomRule = ({index, text}) => {
  return (
    <View style={styles.container__main}>
      {text ? (
        <>
          <Text style={[styles.text, {marginHorizontal: 5}]}>{index}.</Text>
          <View style={styles.text__container}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </>
      ) : null}
    </View>
  );
};

export const styles = StyleSheet.create({
  container__main: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // flexWrap: 'wrap',
    width: '100%',
  },
  text: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text__container: {
    width: '85%',
  },
});

export default CustomRule;
