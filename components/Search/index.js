import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
const Search = () => {
  return (
    <View style={styles.container__main}>
      <View style={styles.container__secondary}>
        <Icons name="ios-search-outline" size={25} color="black" />
        <TextInput style={styles.input} placeholder="Search" />
      </View>
    </View>
  );
};

export default Search;
