import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import {style} from './style';

const CheckBox = ({isChecked, handleCheck}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={style.container}
      onPress={() => handleCheck(!isChecked)}>
      {isChecked ? (
        <View style={style.innerContainer}>
          <Image
            style={style.checkIcon}
            source={require('../../assets/check_Icon.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);
