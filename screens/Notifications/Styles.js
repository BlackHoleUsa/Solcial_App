import {StyleSheet, Platform} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading__main: {
    marginTop: 20,
    fontFamily: 'Poppins-Medium',
    fontWeight: Platform.OS === 'ios' ? fontWeights.medium : 'normal',
    fontSize: 20,
  },
});
