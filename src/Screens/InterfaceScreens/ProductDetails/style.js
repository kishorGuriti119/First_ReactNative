import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {colors} from '../../../utility/colors';

const {height} = Dimensions.get('window');

export const style = StyleSheet.create({
  safe: {
    flex: 1,
  },
  Container: {
    padding: 24,
  },
  ProductImage: {
    height: height * 0.5,
    width: '100%',
  },

  content: {
    backgroundColor: colors.white,
    marginTop: -20,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    width: '100%',
    padding: 24,
  },

  ProductName: {
    fontWeight: '700',
    fontFamily: 'Gelasio',
    fontSize: 24,
    color: colors.fonttextColor,
  },
  ProductPrice: {
    fontFamily: 'Nunito Sans',
    fontSize: 28,
    fontWeight: '700',
    color: colors.fonttextColor,
    marginVertical: 8,
  },
  ProductDescription: {
    fontFamily: 'Nunito Sans',
    fontWeight: '300',
    color: colors.produtText,
  },
  footerContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 24,
  },
  bookmarkContainer: {
    backgroundColor: colors.bookmarkBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    paddingHorizontal: 16,
    borderRadius:8
  },
  bookmarkIcon: {
    height: 24,
    width: 24,
  },
  BackIconContainer: {
    backgroundColor: colors.white,
    position: 'absolute',
    top: 30,
    left: 30,
    borderRadius: 8,
    padding: 6,
  },
  backIcon: {
    height: 24,
    width: 24,
  },

  FooterButtonContainer: {
    flex: 1,
  },
});
