import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 10,
    backgroundColor: 'yellow',
  },
  text__notification: {
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontWeight: Platform.OS === 'ios' ? fontWeights.regular : 'normal',
    flexWrap: 'wrap',
  },
});
