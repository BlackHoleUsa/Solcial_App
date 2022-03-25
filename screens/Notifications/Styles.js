import {StyleSheet, Platform} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%',
  },
  container__heading: {
    marginVertical: 40,
    textAlign: 'center',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  heading__main: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  container__notification: {
    marginTop: 50,
    width: '100%',
  },
  container__loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
