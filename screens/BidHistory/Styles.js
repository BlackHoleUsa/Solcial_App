import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  container__content: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
  },
  container__text: {
    marginVertical: 40,
    textAlign: 'center',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  text__title: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  container__list: {
    width: '100%',
  },
  container__loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
