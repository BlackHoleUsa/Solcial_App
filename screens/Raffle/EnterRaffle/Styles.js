import {StyleSheet} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',

    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingBottom: 40,
  },

  container__content: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',

    flex: 1,
  },
  text__title: {
    marginTop: 20,
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
    flexWrap: 'wrap',

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
    marginTop: 10,
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    borderRadius: 0,
  },
  text__button: {
    color: 'white',
  },
  free_raffle: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: fontWeights.semibold,
    color: 'black',
    marginVertical: 10,
  },
});
