import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container__main: {},
  text__welcome: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 20,
  },
  container__grid: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  container__child_1: {
    width: '47%',
  },
  container__child_2: {
    width: '47%',
  },
  signup__button: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
    textAlign: 'center',
  },
  container__login: {
    flexDirection: 'row',
  },
  text__login: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'normal',
    color: '#B7B7B7',
  },
});
