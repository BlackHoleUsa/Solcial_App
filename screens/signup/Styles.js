import {StyleSheet, Platform} from 'react-native';
export const styles = StyleSheet.create({
  container__main: {width: '100%', paddingHorizontal: 20},
  text__welcome: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  container__grid: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -15,
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
    borderRadius: 0,
  },
  container__login: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text__login: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'normal',
    color: '#B7B7B7',
  },
  container__phoneNumber: {
    width: '100%',

    justifyContent: 'space-between',
    marginTop: -15,
  },
  text_mobilePhone: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
    color: 'white',
  },

  container__countryPicker: {
    width: '100%',
  },
  inputFields: {
    width: '100%',
  },
});
