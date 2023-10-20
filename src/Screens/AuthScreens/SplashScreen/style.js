import {StyleSheet} from 'react-native';
import {colors} from '../../../utility/colors';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 24,
  },

  splashImage: {
    height: 220,
    width: '100%',
    marginBottom: 15,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#303030',
  },

  heighlightedtext: {
    textDecorationLine: 'underline',

    color: colors.splashScreenheightlightedText,
  },
  sign: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.button,
    marginTop: 30,
    fontWeight: 'bold',
  },
});
