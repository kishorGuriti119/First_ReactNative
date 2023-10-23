import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {style} from './style';

const CategoryBox = ({title, image}) => {
  return (
    <Pressable style={style.Container}>
      <View style={style.Item}>
        <Image source={{uri: image}} style={style.image} />
      </View>

      <Text>{title}</Text>
    </Pressable>
  );
};

export default CategoryBox;
