import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Styles';
const Accordian = props => {
  const [expanded, setExpanded] = useState(false);
  const [icon, setIcon] = useState('chevron-right');
  const handlePress = () => {
    setExpanded(!expanded);
    expanded ? setIcon('chevron-right') : setIcon('chevron-down');
  };
  return (
    <View style={styles.container__main}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text__title}>{props.title}</Text>
        <Icons name={icon} size={30} color={'black'} />
      </TouchableOpacity>
      {expanded ? (
        <View>
          <Text>Accordian component</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Accordian;
