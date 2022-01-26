import {Platform, StyleSheet} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    backgroundColor: 'white',
    flex: 1,
  },
  container__accordian: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container__userEmail: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  container__background: {
    backgroundColor: '#142A35',
    width: '100%',
    height: 100,
  },
  container__icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#73529B',
    borderColor: '#73529B',
  },
  text__icon: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: fontWeights.semibold,
    color: 'white',
    fontSize: 40,
    textTransform: 'capitalize',
  },
  text__email: {
    fontFamily: 'Poppins-Medium',
    fontWeight: fontWeights.medium,
    color: 'black',
    fontSize: 20,
    marginTop: 35,
  },
});
