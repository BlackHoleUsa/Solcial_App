import {StyleSheet} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',

    paddingVerticle: 40,
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  container__accordian: {
    backgroundColor: 'white',
    borderBottom: 1,
    borderBottomColor: 'black',
  },
  text__title: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontWeight: fontWeights.regular,
    fontSize: 15,
  },
});
