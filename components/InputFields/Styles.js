import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    marginBottom: 15,
    paddingVertical: 12,
  },
  container__input: {
    borderWidth: 1,
    borderColor: '#707070',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  input: {
    // height: 20,
    // margin: 10,

    color: 'white',
    // padding: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    width: '80%',
  },
  text__input: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
    fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
  },
  icon: {
    marginHorizontal: 5,
    width: '20%',

    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text__errors: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#ff002d',
  },
});
