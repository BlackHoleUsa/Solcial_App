import {StyleSheet} from 'react-native';
import {fontWeights} from '../../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container__content: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
  },
  text__title: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
    fontSize: 15,
  },
  container__time: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  container__time_item: {
    marginHorizontal: 20,
  },
  text__time_title: {
    fontFamily: 'Poppins-Bold',
    fontWeight: fontWeights.bold,
    color: 'black',
    fontSize: 30,
  },
  text__time_type: {
    fontFamily: 'Poppins-Regular',
    fontWeight: fontWeights.regular,
    color: 'black',
  },
});
