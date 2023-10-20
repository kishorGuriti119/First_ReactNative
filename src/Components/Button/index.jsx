import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import {style} from './style';

const Button = ({title, Mystyle}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={[style.button, Mystyle]}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
