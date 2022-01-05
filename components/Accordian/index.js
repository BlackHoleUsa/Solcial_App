import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Styles';
const Accordian = () => {
  const [expanded, setExpanded] = useState(true);
  const [icon, setIcon] = useState('chevron-right');
  const handlePress = () => {
    setExpanded(!expanded);
    expanded ? setIcon('chevron-right') : setIcon('chevron-down');
  };
  return (
    <View style={styles.container__main}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text__title}>Press Here</Text>
        <Icons name={icon} size={30} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default Accordian;
