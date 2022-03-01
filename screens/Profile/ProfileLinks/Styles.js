import {StyleSheet} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: 10,
  },
  text__title: {
    fontFamily: 'Poppins-Regular',
    fontWeight: fontWeights.regular,
    color: 'black',
    fontSize: 15,
  },
});
