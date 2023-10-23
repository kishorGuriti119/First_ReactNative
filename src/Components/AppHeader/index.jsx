import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {style} from './style';

const AppHeader = ({search, logout, title, Showback ,onSearchClick}) => {
  return (
    <View style={style.AppHeaderContainer}>
      <View>
        {search ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image
              source={require('../../assets/search_icon.png')}
              style={{height: 21, width: 21}}
            />
          </Pressable>
        ) : Showback ? (
          <Pressable>
            <Image
              source={require('../../assets/back_arrow_icon.png')}
              style={{height: 21, width: 21}}
            />
          </Pressable>
        ) : null}
      </View>
      <Text style={style.text}>{title}</Text>
      {logout ? (
        <Pressable>
          <Image
            source={require('../../assets/logout_icon.png')}
            style={{height: 21, width: 21}}
          />
        </Pressable>
      ) : (
        <View style={{height: 21, width: 21}} />
      )}
    </View>
  );
};

export default AppHeader;
