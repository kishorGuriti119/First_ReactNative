import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import AppHeader from '../AppHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './style';

const FavoriteItem = ({id, title, image, category, price}) => {
  console.log(image);
  return (
    <Pressable>
      <View style={style.favItemContainer}>
        <Image source={{uri: image}} style={style.ImageStyle} />
        <View style={style.favItemDetails}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.price}>{price}</Text>
        </View>
        <Image
          source={require('../../assets/close.png')}
          style={style.closeIcon}
        />
      </View>
      <View style={style.borderLine} />
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
