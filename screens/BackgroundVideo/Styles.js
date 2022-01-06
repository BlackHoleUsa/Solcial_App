import {Platform, StyleSheet, Dimensions} from 'react-native';
import {fontWeights} from '../../../assets/Data';
const {height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    flex: 1,
  },
  container__video: {
    width: '100%',
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    bottom: 0,
    right: 0,
  },
});
