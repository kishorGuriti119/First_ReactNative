import React from 'react';
import {Pressable, Image, Text} from 'react-native';
import {style} from './style';

const ProductItem = ({item}) => {
  //   console.log(item.image);
  return (
    <Pressable style={style.container}>
      <Image source={{uri: item?.image}} style={style.ProductImage} />
      <Text style={style.ProductName}>{item?.title}</Text>
      <Text style={style.price}>{item?.price}</Text>
    </Pressable>
  );
};

export default ProductItem;
