import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileLinks = ({title, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container__main}
      onPress={() => {
        navigation.navigate(title);
      }}>
      <Text style={styles.text__title}>{title}</Text>
      <Icons name={'chevron-right'} size={25} color={'black'} />
    </TouchableOpacity>
  );
};

export default ProfileLinks;
