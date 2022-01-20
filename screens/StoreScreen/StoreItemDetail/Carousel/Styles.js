import {StyleSheet, Dimensions} from 'react-native';

export const MAX_WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  container__image: {width: MAX_WIDTH, height: 250, backgroundColor: '#E6E6E6'},
  container: {
    flexDirection: 'row',
  },
  indicatorContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: MAX_WIDTH,
    bottom: 10,
    zIndex: 2,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: '#ADADAD',
    borderWidth: 1,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  activeIndicator: {
    backgroundColor: 'black',
  },
  container_icons: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    top: '50%',
    zIndex: 2,
  },
});
