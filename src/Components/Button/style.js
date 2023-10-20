import {StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';

export const style = StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    paddingVertical: 18,
    borderRadius: 14,
  },
  title: {
    color: colors.whiteText,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
