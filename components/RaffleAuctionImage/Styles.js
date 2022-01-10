import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    position: 'relative',
    height: 200,
  },

  image: {
    width: '100%',
    height: '100%',
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
