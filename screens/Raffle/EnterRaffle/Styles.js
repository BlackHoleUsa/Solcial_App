import {StyleSheet} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  container__content: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',

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
  container__raffle_close_time: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginVertical: 10,
  },
  text__raffle_close_on: {
    fontFamily: 'Poppins-Regular',
    fontWeight: fontWeights.regular,
    color: 'black',
  },
  text__raffle_close_time: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
  },
  container__price_per_ticket: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text__price_per_ticket: {
    fontFamily: 'Poppins-Regular',
    fontWeight: fontWeights.regular,
    color: 'black',
  },
  text__price: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: fontWeights.semibold,
    color: 'black',
    marginVertical: 10,
  },
  text__check_results: {
    fontFamily: 'Poppins-Regular',
    fontWeight: fontWeights.regular,
    color: 'black',
    marginVertical: 10,
  },
  text__results: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: fontWeights.semibold,
    color: 'black',
  },
  button: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 40,
  },
  text__button: {
    color: 'white',
  },
});
