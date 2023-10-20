import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {style} from './style';

const AuthHeader = ({title}) => {
  return (
    <View style={style.AuthHeaderContainer}>
      <Pressable hitSlop={20}>
        <Image
          style={style.backIcon}
          source={require('../../assets/back_icon.png')}
        />
      </Pressable>
      <Text style={style.pageTitle}>{title}</Text>
    </View>
  );
};

export default React.memo(AuthHeader);
