import {StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';

export const style = StyleSheet.create({
  AuthHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:25,
  },

  backIcon: {
    width: 18.41,
    height: 17.41,
  },

  pageTitle: {
    paddingHorizontal: 16,
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
    color: colors.blueText,
  },
});
