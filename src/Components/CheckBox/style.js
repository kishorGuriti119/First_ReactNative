import {StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';

export const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.inputborder,
    height: 22,
    width: 22,
  },
  innerContainer: {
    backgroundColor: colors.inputborder,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    height: 9,
    width: 12,
  },
});
