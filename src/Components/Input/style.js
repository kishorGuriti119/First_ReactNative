import {StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';
export const style = StyleSheet.create({
  container: {
    padding: 14,
  },
  label: {
    marginBottom: 8,
    color: colors.blueText,
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight:'500',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 14,
    borderColor: colors.inputborder,
    paddingHorizontal: 14,
    paddingVertical:6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputfield: {
    flex: 1,
  },
  eye: {
    width: 24,
    height: 24,
  },
});
