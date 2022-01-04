import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text__title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    fontWeight: fontWeights.semibold,
    marginTop: 20,
  },
});
