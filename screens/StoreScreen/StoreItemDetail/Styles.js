import {StyleSheet} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',

    backgroundColor: 'white',
    paddingBottom: 20,
  },
  container__content: {
    width: '100%',
    padding: 20,
    justifyContent: 'space-between',
    flex: 1,
  },
  text__title: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
  },
  text__description: {
    fontFamily: 'Poppins-Regular',
    fontWeight: fontWeights.regular,
    color: 'black',
  },
  text__price: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
    fontSize: 16,
    marginVertical: 5,
  },
  container__size: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  text__size: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
    fontSize: 16,
  },
  container__size__buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 40,
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  text__size__button: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
  },
  button__checkout: {
    backgroundColor: 'black',
    borderRadius: 0,
    marginVertical: 40,
  },
});
