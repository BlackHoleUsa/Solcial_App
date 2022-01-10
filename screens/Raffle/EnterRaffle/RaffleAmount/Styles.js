import {StyleSheet} from 'react-native';
import {fontWeights} from '../../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container__content: {
    width: '80%',
    height: '100%',
    backgroundColor: '#F3F3F3',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text__title: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
  },
  container__amount__buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  container__button: {
    backgroundColor: '#D4D4D4',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text__amount: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: fontWeights.semibold,
    color: 'black',
  },
});
