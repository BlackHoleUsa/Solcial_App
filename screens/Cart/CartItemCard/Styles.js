import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,

    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
  },
  container__imageAndContent: {
    width: '100%',
    flexDirection: 'row',
    height: 150,
    justifyContent: 'space-between',
  },
  container__image: {width: '40%'},
  image: {
    width: '100%',
    height: '100%',
  },
  container__content: {width: '50%'},
  text__itemTitle: {
    fontFamily: 'Poppins-Light',
    fontWeight: fontWeights.regular,
    color: 'black',
  },
  text__size: {color: '#9D9EA3'},
  container__priceAndButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text__price: {},
  container__buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    width: 100,
    borderColor: 'black',
    paddingHorizontal: 10,
  },
  quantity__button: {
    padding: 5,
    margin: 0,
    textAlign: 'center',
  },
  text__quantity: {},
  container__removeButton: {},
  remove__button: {},
});
