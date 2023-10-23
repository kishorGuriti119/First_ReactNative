import {StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';

export const style = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: 32,
    height: 32,
  },

  Item: {
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  label: {
    fontFamily: 'Nunito Sans',
    fontWeight: '400',
    color: colors.categoryLable,
  },
});
