import React from 'react';
import {View, Text, Image} from 'react-native';
import Button from '../../../Components/Button';
import {style} from './style';

const SplashScreen = ({navigation}) => {
  const OnSignIn = () => {
    navigation.navigate('SIGNIN');
  };

  const OnSignUp = () => {
    navigation.navigate('SIGNUP');
  };

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
        <Button handleClick={OnSignUp} title="Sign Up" />
        <Text onPress={OnSignIn} style={style.sign}>
          sign in
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
