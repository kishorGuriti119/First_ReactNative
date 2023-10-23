import {StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';

export const style = StyleSheet.create({
  AppHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.fonttextColor,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
  },
});
