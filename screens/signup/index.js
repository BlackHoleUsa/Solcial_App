import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, TouchableRipple} from 'react-native-paper';
import BackgroundGradient from '../../components/BackgroundGradient';
import InputField from '../../components/InputFields';
import {styles} from './Styles';
const Signup = ({navigation}) => {
  return (
    <BackgroundGradient>
      <ScrollView style={styles.container__main}>
        <Text style={styles.text__welcome}>Welocome to SOLEcial app!</Text>
        <View style={styles.container__grid}>
          <View style={styles.container__child_1}>
            <InputField label="First Name" />
          </View>
          <View style={styles.container__child_2}>
            <InputField label="Last Name" />
          </View>
        </View>
        <InputField label="Email" />
        <InputField label="Password" icon="eye" />
        <InputField label="Address" />
        {/* state and city */}
        <View style={styles.container__grid}>
          <View style={styles.container__child_1}>
            <InputField label="City" />
          </View>
          <View style={styles.container__child_2}>
            <InputField label="State" />
          </View>
        </View>
        {/* country and zip code */}
        <View style={styles.container__grid}>
          <View style={styles.container__child_1}>
            <InputField label="Country" />
          </View>
          <View style={styles.container__child_2}>
            <InputField label="Zip Code" />
          </View>
        </View>
        {/* phone number */}
        <View style={styles.container__phoneNumber}>
          <Text style={styles.text_mobilePhone}>Mobile Phone</Text>
          <View style={[styles.container__grid, {marginTop: 0}]}>
            <View style={{width: '25%'}}>
              <InputField />
            </View>
            <View style={{width: '70%'}}>
              <InputField />
            </View>
          </View>
        </View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Main App')}
          style={styles.signup__button}
          labelStyle={{color: 'black', fontFamily: 'Poppins-Regular'}}>
          Sign Up
        </Button>
        {/* already have an account */}
        <View style={styles.container__login}>
          <Text style={styles.text__login}>Already have an account?</Text>
          <TouchableRipple onPress={() => {}} rippleColor="rgba(0, 0, 0, .32)">
            <Text
              style={styles.text__login}
              style={{color: 'white', marginLeft: 5}}>
              Login
            </Text>
          </TouchableRipple>
        </View>
      </ScrollView>
    </BackgroundGradient>
  );
};

export default Signup;
