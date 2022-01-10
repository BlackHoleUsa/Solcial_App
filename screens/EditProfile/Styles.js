import {StyleSheet, Platform} from 'react-native';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  container__title: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text__title: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
    color: 'black',
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
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    borderRadius: 0,
    marginVertical: 20,
  },

  container__phoneNumber: {
    width: '100%',

    justifyContent: 'space-between',
    marginTop: 10,
  },
  text_mobilePhone: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
    color: 'black',
  },
  container__countryPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container__countryPicker__1: {
    width: '35%',
    borderWidth: 1,
    borderColor: '#707070',
    padding: 5,
    height: 42,
    marginTop: 4,
  },
  container__countryPicker__2: {
    width: '60%',
  },
  field: {
    color: 'black',
  },
});
