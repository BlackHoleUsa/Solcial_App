import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container__main: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
  },
  text__card: {
    color: 'black',
  },
  container__title: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text__title: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
    fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
  },
  container__expiry_cvc: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  container__expiryDate: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '50%',
  },

  container__expiryfields: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  input__fields: {
    textAlign: 'center',
    width: '40%',
  },
  text__input: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
    fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
  },
  container__cvc: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '40%',
  },
  input__cvc: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
  },
  input__style: {
    width: '100%',
    textAlign: 'center',
  },
  button__payment: {
    marginTop: 20,
    backgroundColor: 'black',
    borderRadius: 0,
  },
  text__errors: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#ff002d',
  },
});
