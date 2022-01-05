import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',

    paddingVerticle: 40,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 0,
  },
  container__accordian: {
    backgroundColor: 'white',
    borderBottom: 1,
    borderBottomColor: 'black',
  },
  text__title: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    fontSize: 15,
  },
});
