import {Platform, StyleSheet, Dimensions} from 'react-native';
import {fontWeights} from '../../assets/Data';
const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    position: 'relative',
  },
  container__image: {
    width: width,
    backgroundColor: '#E6E6E6',
    // height: 200,
  },
  image: {
    width: '100%',
    // height: '100%',
    aspectRatio: 1 / 1,
  },
  container__content: {padding: 10, backgroundColor: 'white'},

  text__title: {
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
    fontWeight: Platform.OS === 'ios' ? fontWeights.semibold : 'normal',
    fontSize: 16,
    flexShrink: 1,
    // flexWrap: 'wrap',
    // flex: 1,
  },
  container__detail: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  raffle__button: {
    borderRadius: 0,
    margin: 0,
    padding: 0,
  },
  text__details: {
    color: 'black',
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  container__title: {
    // flexWrap: 'wrap',
    // backgroundColor: 'yellow',
    width: 0,
    flexGrow: 1,
    flex: 1,
  },
  icon: {
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: 2,
  },
});
