import {StyleSheet, Platform} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  heading__main: {
    marginTop: 20,
    fontFamily: 'Poppins-Medium',
    fontWeight: Platform.OS === 'ios' ? fontWeights.medium : 'normal',
    fontSize: 20,
  },
  container__notification: {
    marginTop: 100,
    width: '100%',
  },
  container__loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
