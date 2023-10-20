import {StyleSheet} from 'react-native';
import {colors} from '../../../utility/colors';

export const style = StyleSheet.create({
  signupContainer: {
    padding: 22,
  },
  checkBoxPlace: {
    paddingHorizontal: 22,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  AgreeText: {
    color: colors.blueText,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    paddingHorizontal: 13,
  },
  AgreeBold: {
    fontWeight: 'bold',
  },
  customBtn: {
    marginTop: 24,
    marginHorizontal: 14,
  },
  AuthFooter: {
    marginVertical: 24,
  },
});
