import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text__title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    fontWeight: fontWeights.medium,
    marginTop: 20,
  },
  container__flatList: {
    width: '100%',
  },
});
