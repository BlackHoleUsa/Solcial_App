import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,

    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  container__imageAndContent: {
    width: '100%',
    flexDirection: 'row',
    height: 125,
    justifyContent: 'space-between',
  },
  container__image: {width: '40%'},
  image: {
    width: '100%',
    height: '100%',
  },
  container__content: {
    width: '50%',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  text__itemTitle: {
    fontFamily: 'Poppins-Light',
    fontWeight: fontWeights.regular,
    color: 'black',
  },
  text__size: {
    color: '#9D9EA3',
    marginTop: 10,
  },
  container__priceAndButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text__price: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
  },
  container__buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    width: 100,
    borderColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  quantity__button: {
    padding: 0,
    margin: 0,
    textAlign: 'center',

    // height: '100%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text__quantity: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
  },
  container__removeButton: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  remove__button: {},
  text__remove__button: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
  },
});
