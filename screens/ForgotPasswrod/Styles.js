import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text__otp: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  container__otp: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '15%',
    marginHorizontal: 10,
  },
  resetpassword__button: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
    textAlign: 'center',
    borderRadius: 0,
  },
});
