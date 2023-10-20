import React from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {View, Image, TouchableOpacity} from 'react-native';
import {style} from './style';

const GoogleAuth = () => {
  const handelGoogleSign = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <TouchableOpacity style={style.googleContainer} onPress={handelGoogleSign}>
      <Image
        style={style.googleIcon}
        source={require('../../assets/Google_logo.png')}
      />
    </TouchableOpacity>
  );
};

export default GoogleAuth;
