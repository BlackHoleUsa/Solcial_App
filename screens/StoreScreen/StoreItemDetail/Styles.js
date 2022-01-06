import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    flex: 1,
  },
  container__content: {
    width: '100%',
    padding: 20,
    justifyContent: 'space-around',
    flex: 1,
  },
  text__title: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
  },
  text__description: {
    fontFamily: 'Poppins-Regular',
    fontWeight: fontWeights.regular,
    color: 'black',
  },
  text__price: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
    fontSize: 16,
    marginVertical: 5,
  },
  container__size: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text__size: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
    fontSize: 16,
  },
  container__size__buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text__size__button: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
  },
  button__checkout: {
    backgroundColor: 'black',
    borderRadius: 0,
    marginBottom: 10,
  },
});
