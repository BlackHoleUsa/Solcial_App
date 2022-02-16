import {Platform, StyleSheet, Dimensions} from 'react-native';
import {fontWeights} from '../../../assets/Data';
const {height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    height: height,
    flex: 1,
    backgroundColor: '#6C589F',
  },
  container__video: {
    width: '100%',

    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    bottom: 0,
    right: 0,
  },
});
