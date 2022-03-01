import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    height: height,
    flex: 1,
    backgroundColor: '#6C589F',
    position: 'relative',
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
  container__loader: {
    width: '100%',
    // height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    // left: '50%',
  },
});
