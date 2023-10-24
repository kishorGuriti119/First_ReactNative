import React from 'react';
import {Pressable, Image, Text} from 'react-native';
import {style} from './style';

const ProductItem = ({item, onPress}) => {
  return (
    <Pressable style={style.container} onPress={onPress}>
      <Image source={{uri: item?.image}} style={style.ProductImage} />
      <Text style={style.ProductName}>{item?.title}</Text>
      <Text style={style.price}>{item?.price}</Text>
    </Pressable>
  );
};

export default ProductItem;
