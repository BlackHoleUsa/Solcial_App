import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
const Search = ({data, setData, originalData}) => {
  const [text, setText] = useState();
  const filterListData = inputString => {
    setText(inputString);

    const newData = originalData.filter(item => eachIndex(item));

    function eachIndex(e) {
      return e.name.toLowerCase().includes(inputString.toLowerCase());
    }

    setData(newData);
  };

  return (
    <View style={styles.container__main}>
      <View style={styles.container__secondary}>
        <Icons name="ios-search-outline" size={25} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={filterListData}
          value={text}
          placeholderTextColor="#A9A9A9"
        />
      </View>
    </View>
  );
};

export default Search;
