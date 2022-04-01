import {StyleSheet} from 'react-native';
import {fontWeights} from '../../assets/Data';

export const styles = StyleSheet.create({
  container__main: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    position: 'relative',
    paddingTop: 40,
    paddingHorizontal: 25,
  },
  container__cross: {
    position: 'absolute',
    top: 2,
    right: 20,
  },
  container__button: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopColor: 'blue',
    borderBottomColor: 'blue',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 10,
  },
  text__title: {
    fontSize: 20,
    fontWeight: fontWeights.semibold,
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },
  text__description: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
    fontFamily: 'Poppins-Regular',
  },
  text__button: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'blue',
    fontFamily: 'Poppins-Regular',
  },
});
