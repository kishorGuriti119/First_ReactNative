import React, {useState} from 'react';
import {Pressable, TextInput, View, Text, Image} from 'react-native';
import {style} from './style';

const Input = ({label, placeholder, isPassword}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const eyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
    console.log('eye clicked');
  };

  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <Pressable>
        <View style={style.inputContainer}>
          <TextInput
            style={style.inputfield}
            placeholder={placeholder}
            secureTextEntry={isPassword && isPasswordVisible}
          />
          {isPassword ? (
            <Pressable onPress={eyePress}>
              <Image
                style={style.eye}
                source={
                  isPasswordVisible
                    ? require('../../assets/eye.png')
                    : require('../../assets/eye_closed.png')
                }
              />
            </Pressable>
          ) : null}
        </View>
      </Pressable>
    </View>
  );
};

export default React.memo(Input);
