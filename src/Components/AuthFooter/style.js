import {StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';

export const style = StyleSheet.create({
  AuthFooterContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  AuthFooterText: {
    color: colors.blueText,
    fontSize: 14,
    fontWeight: '600',
  },
  Helighted: {
    fontWeight: 'bold',
  },
});
