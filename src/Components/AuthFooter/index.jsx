import React from 'react';
import {View, Text} from 'react-native';
import {style} from './style';

const AuthFooter = ({text, onPress, prefix}) => {
  return (
    <View style={style.AuthFooterContainer}>
      <Text style={style.AuthFooterText}>
        {prefix}{' '}
        <Text style={style.Helighted} onPress={onPress}>
          {text}
        </Text>
      </Text>
    </View>
  );
};

export default AuthFooter;
