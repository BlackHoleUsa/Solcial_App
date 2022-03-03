import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    backgroundColor: 'white',
  },
  container__loader: {
    width: '100%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  container__search: {
    width: '100%',
    paddingHorizontal: 10,
  },
  container__empty: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text__empty: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
});
