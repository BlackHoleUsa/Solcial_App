import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  text__notification: {
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontWeight: Platform.OS === 'ios' ? fontWeights.regular : 'normal',
  },
  container__icon: {
    backgroundColor: 'white',
  },
  container__text: {
    paddingHorizontal: 10,

    width: '70%',

    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
