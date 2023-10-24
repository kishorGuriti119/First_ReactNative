import {StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';

export const style = StyleSheet.create({
  favItemContainer: {
    paddingVertical: 24,
    flexDirection: 'row',
  },

  ImageStyle: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },

  favItemDetails: {
    marginHorizontal: 8,
    flex: 1,
  },
  title: {
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    color: colors.produtText,
  },

  price: {
    fontFamily: 'Nunito Sans',
    fontWeight: '700',
    fontSize: 16,
    color: colors.fonttextColor,
  },

  closeIcon: {
    height: 24,
    width: 24,
  },

  borderLine: {
    height: 1,
    backgroundColor: colors.favItemBorderLine,
  },
});
