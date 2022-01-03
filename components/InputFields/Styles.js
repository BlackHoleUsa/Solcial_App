import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    marginBottom: 15,
  },
  container__input: {
    borderWidth: 1,
    borderColor: '#707070',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  input: {
    height: 20,
    margin: 10,

    color: 'white',
    padding: 10,
    paddingVertical: 0,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
  },
  text__input: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
    fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
  },
  icon: {
    margin: 12,
  },
});
