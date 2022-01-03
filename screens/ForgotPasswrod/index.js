import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import BackgroundGradient from '../../components/BackgroundGradient';
import InputField from '../../components/InputFields';
import {styles} from './Styles';
const ForgotPassword = ({navigation}) => {
  return (
    <BackgroundGradient>
      <View style={styles.container__main}>
        <InputField
          label="Email"
          placeholder="example@email.com      "
          icon="ios-checkmark-circle-outline"
        />
        <Text style={styles.text__otp}>Enter the OTP sent to your email</Text>
        <View style={styles.container__otp}>
          <InputField placeholder=" " style={styles.input} />
          <InputField placeholder=" " style={styles.input} />
          <InputField placeholder="  " style={styles.input} />
          <InputField placeholder=" " style={styles.input} />
        </View>
        <InputField label="Create New Password" icon="eye" />
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Main App')}
          style={styles.resetpassword__button}
          labelStyle={{color: 'black', fontFamily: 'Poppins-SemiBold'}}>
          Reset Password
        </Button>
      </View>
    </BackgroundGradient>
  );
};

export default ForgotPassword;
