import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileLinks = ({title, navigation}) => {
  //  navigation.navigate(title);
  return (
    <TouchableOpacity style={styles.container__main} onPress={() => {}}>
      <Text style={styles.text__title}>{title}</Text>
      <Icons name={'chevron-right'} size={25} color={'black'} />
    </TouchableOpacity>
  );
};

export default ProfileLinks;
