import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utility/colors';
const {width} = Dimensions.get('window');

export const style = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 4,
  },

  ProductImage: {
    width: (width - 60) / 2,
    height: 200,
    borderRadius:14
  },
  ProductName: {
    color: colors.produtText,
    fontFamily: 'Nunito Sans',
    lineHeight: 19,
    fontWeight: '400',
    marginVertical: 5,
  },
  price: {
    color: colors.priceText,
    fontFamily: 'Nunito Sans',

    fontWeight: '700',
  },
});
