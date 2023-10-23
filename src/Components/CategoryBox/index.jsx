import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {style} from './style';
import {colors} from '../../utility/colors';

const CategoryBox = ({title, image, onPress, isSelected}) => {
  return (
    <Pressable style={style.Container} onPress={onPress}>
      <View style={[style.Item, isSelected ? {backgroundColor: 'black'} : {}]}>
        <Image source={{uri: image}} style={[style.image]} />
      </View>

      <Text
        style={[
          style.label,
          isSelected ? {color: colors.blueText, fontWeight: 'bold'} : {},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default CategoryBox;
