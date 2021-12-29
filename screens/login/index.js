import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
const Login = ({navigation}) => {
  const handleNavigation = () => {
    navigation.navigate('Signup');
  };
  const handleForogotPasswordNavigation = () => {
    navigation.navigate('Forgot Password');
  };
  return (
    <View style={styles.login__container}>
      <Text>Login screen</Text>
      <TouchableRipple
        onPress={handleForogotPasswordNavigation}
        rippleColor="rgba(0, 0, 0, .32)">
        <Text>Forgot Password</Text>
      </TouchableRipple>
      <TouchableRipple
        onPress={handleNavigation}
        rippleColor="rgba(0, 0, 0, .32)">
        <Text>Sign up</Text>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  login__container: {
    backgroundColor: 'yellow',
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
