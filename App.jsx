/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import SignUp from './src/Screens/AuthScreens/SignUp';
import Login from './src/Screens/AuthScreens/Login';
import SplashScreen from './src/Screens/AuthScreens/SplashScreen';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

function App() {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.webserver_id, // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  }, []);

  return (
    <SafeAreaView>
      <SignUp />
      {/* <Login /> */}
      {/* <SplashScreen />  */}
    </SafeAreaView>
  );
}

export default App;
