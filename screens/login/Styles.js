import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  login__container: {
    flex: 1,

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontWeight: 'normal',
    color: 'white',
  },

  login__button: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
    textAlign: 'center',
  },
  container__signup: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 80,
  },
  text__signup: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'normal',
    color: '#B7B7B7',
  },
  forgotpassword__text: {
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
    fontWeight: 'normal',
    color: '#B7B7B7',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  secondary__container: {
    width: 350,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
