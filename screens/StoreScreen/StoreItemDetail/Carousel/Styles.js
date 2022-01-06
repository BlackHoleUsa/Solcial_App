import {Platform, StyleSheet, Dimensions} from 'react-native';
import {fontWeights} from '../../../assets/Data';
export const MAX_WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
  },
  container__image: {width: MAX_WIDTH, height: 250},
  container: {
    flexDirection: 'row',
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: MAX_WIDTH,
    bottom: 10,
    zIndex: 2,
  },
  indicator: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  activeIndicator: {
    backgroundColor: 'black',
  },
});
