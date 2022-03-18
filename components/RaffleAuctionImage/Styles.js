import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    position: 'relative',
    // height: ,
  },

  image: {
    width,
    // height: '100%',
    aspectRatio: 1 / 1,
  },
  container__icon: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    left: 6,
    top: 6,
  },
});
