import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {marginBottom: 5, width: '100%'},
  container__image: {
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text__title: {
    fontFamily: 'Poppins-Light',
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    color: 'black',
  },
  container__priceAndCart: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  text__price: {
    fontFamily: 'Poppins-Regular',
    fontWeight: Platform.OS === 'ios' ? fontWeights.regular : 'normal',
    color: 'black',
  },
});
