import React from 'react';
import AuthHeader from '../../../Components/AuthHeader';
import {View} from 'react-native';
import {style} from './style';
import Input from '../../../Components/Input/inedx';
import Button from '../../../Components/Button';
import Separator from '../../../Components/Separator/inex';
import GoogleAuth from '../../../Components/GoogleAuth';
import AuthFooter from '../../../Components/AuthFooter';

const Login = () => {
  return (
    <View style={style.signinContainer}>
      <AuthHeader title="Sign In" />
      <Input label="E-Mail" placeholder="Kishor Guriti" />
      <Input label="Password" placeholder="*********" isPassword />

      <View>
        <Button title="Sign In" Mystyle={style.customBtn} />
      </View>
      <View>
        <Separator text="Or sign in with" />
      </View>
      <GoogleAuth />
      <View style={style.AuthFooterContainer}>
        <AuthFooter text="Sign Up" prefix="Don’t have an account? " />
      </View>
    </View>
  );
};

export default Login;
