import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';

import CustomStatusBar from '../../components/CustomStatusBar';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './Styles';

import ProfileLinks from './ProfileLinks';
import {useSelector, useDispatch} from 'react-redux';
import {setLogout} from '../../redux/actions/actions';
const Profile = ({navigation}) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.userInfo);
  return (
    <View style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar
          backgroundColor={'#142A35'}
          barStyle={'light-content'}
        />
      )}
      <View style={styles.container__userEmail}>
        <View style={styles.container__background}></View>
        <View style={styles.container__icon}>
          <Text style={styles.text__icon}>{userInfo.email.charAt(0)}</Text>
        </View>
        <Text style={styles.text__email}>{userInfo.email}</Text>
      </View>
      <View style={styles.container__logout}>
        <TouchableOpacity onPress={() => dispatch(setLogout())}>
          <View style={styles.container__button__logout}>
            <Icons name="logout" size={30} color={'black'} />
            <Text style={styles.text__logout}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container__accordian}>
        <ProfileLinks navigation={navigation} title="Update Profile" />
        <ProfileLinks navigation={navigation} title="Store History" />
        <ProfileLinks navigation={navigation} title="Auction History" />
        <ProfileLinks navigation={navigation} title="Raffle History" />
      </View>
    </View>
  );
};

export default Profile;
