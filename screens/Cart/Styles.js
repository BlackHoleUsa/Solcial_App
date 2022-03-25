import {StyleSheet} from 'react-native';
import {fontWeights} from '../../assets/Data';
export const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text__title: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
  container__flatList: {
    width: '100%',
    flex: 1,
  },

  container__totalAmount: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  text__total: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    fontWeight: fontWeights.regular,
  },
  text__totalAmount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    fontWeight: fontWeights.semibold,
  },
  checkout__button: {
    backgroundColor: 'black',
    borderRadius: 0,
    marginTop: 10,
    marginBottom: 30,
    width: '100%',
  },
});
