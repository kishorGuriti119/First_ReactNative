import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../../Components/Button';
import {style} from './style';

const SplashScreen = () => {
  return (
    <View style={style.container}>
      <Image
        resizeMode="cover"
        style={style.splashImage}
        source={require('../../../assets/splash_screen_image.png')}
      />
      <View>
        <Text style={style.title}>You'll Find </Text>
        <Text style={[style.title, style.heighlightedtext]}>All you need</Text>
        <Text style={[style.title]}>Here!</Text>
        <Button title="Sign Up" />
        <Text style={style.sign}>sign in</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
