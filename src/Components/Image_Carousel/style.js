import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {colors} from '../../../utility/colors';

const {height, width} = Dimensions.get('window');

export const style = StyleSheet.create({
  carouselItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
  },
  image: {
    height: height * 0.5,
    width: width,
    resizeMode: 'fill',
  },
  paginationContainer: {
    paddingVertical: 8,
    position: 'absolute',
    bottom: height * 0.39,
    left: width * 0.35,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
});
