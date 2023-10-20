import {StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 28,
  },

  line: {
    height: 1,
    backgroundColor: colors.separatorlinetext,
    flex: 1,
  },

  text: {
    color: colors.blueText,
    marginHorizontal: 6,
  },
});
