import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../assets/Data';

export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    position: 'relative',
  },
  container__image: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
  },
  container__content: {padding: 10},
  text__title: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontWeight: Platform.OS === 'ios' ? fontWeights.semibold : 'normal',
    fontSize: 16,
  },
  container__detail: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  raffle__button: {
    borderRadius: 0,
    margin: 0,
    padding: 0,
  },
  text__details: {
    color: 'black',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  text__details__container: {
    width: '55%',
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 2,
  },
});
