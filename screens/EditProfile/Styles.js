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
  button__editProfile: {
    marginTop: 10,
    marginBottom: 80,
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    borderRadius: 0,

    flexGrow: 2,
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
    alignItems: 'flex-start',
  },
  container__countryPicker__1: {
    width: '35%',
    borderWidth: 1,
    borderColor: '#707070',
    padding: 0,
    height: 41,
    marginTop: Platform.OS === 'ios' ? 30 : 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container__countryPicker__2: {
    width: '60%',
  },
  field: {
    color: 'black',
  },
  inputFields: {
    color: 'black',
    width: '100%',
  },
  textStyle: {color: 'black'},
});
