import {StyleSheet} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
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
  text__auction: {
    fontFamily: 'Poppins-Regular',
    fontWeight: fontWeights.regular,
    color: 'black',
  },
  text___highest_bid: {
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
