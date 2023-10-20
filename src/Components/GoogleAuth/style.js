import {StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';

export const style = StyleSheet.create({
  googleContainer: {
    height: 60,
    backgroundColor: colors.googleAuthBackground,
    alignSelf: 'center',
    width: '35%',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    height: 39,
    width: 32,
  },
});
