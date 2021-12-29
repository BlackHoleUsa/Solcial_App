import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TouchableRipple, Button} from 'react-native-paper';
import useLogin from '../../hooks/useLogin';
const Login = ({navigation}) => {
  const {handleSignupNavigation, handleForogotPasswordNavigation} =
    useLogin(navigation);

  return (
    <View style={styles.login__container}>
      <Text>Login screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Main App')}>
        Main App
      </Button>
      <TouchableRipple
        onPress={handleForogotPasswordNavigation}
        rippleColor="rgba(0, 0, 0, .32)">
        <Text>Forgot Password</Text>
      </TouchableRipple>
      <TouchableRipple
        onPress={handleSignupNavigation}
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
