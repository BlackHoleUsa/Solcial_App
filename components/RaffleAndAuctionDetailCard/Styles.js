import {Platform, StyleSheet, Dimensions} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',

    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    position: 'relative',
  },
  container__card: {
    width: '80%',
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  container__icon: {
    position: 'absolute',
    left: '50%',
    top: -18,
    zIndex: 2,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E6E6E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container__image: {
    width: '40%',
    height: 150,
  },
  image__card: {
    width: '100%',
    height: '100%',
  },
  container__content: {
    width: '60%',
    paddingHorizontal: 10,
  },
  text__title: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
  },
  text__description: {
    fontFamily: 'Poppins-Light',
    fontWeight: fontWeights.thin,
    fontSize: 12,
    color: 'black',
  },
  button: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 10,
  },
  text__button: {
    color: 'white',
  },
});