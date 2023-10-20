import React from 'react';
import {View, Text} from 'react-native';
import {style} from './style';
const Separator = ({text}) => {
  return (
    <View style={style.container}>
      <View style={style.line}></View>
      <Text style={style.text}>{text}</Text>
      <View style={style.line}></View>
    </View>
  );
};

export default React.memo(Separator);
