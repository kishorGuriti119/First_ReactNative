import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import AuthHeader from '../../../Components/AuthHeader';
import Input from '../../../Components/Input/inedx';
import {style} from './style';
import CheckBox from '../../../Components/CheckBox';
import Button from '../../../Components/Button';
import Separator from '../../../Components/Separator/inex';
import GoogleAuth from '../../../Components/GoogleAuth';
import AuthFooter from '../../../Components/AuthFooter';

const SignUp = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(true);

  const OnSignIn = () => {
    navigation.navigate('SIGNIN');
  };

  return (
    <ScrollView style={style.signupContainer}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="kishor guriti" />
      <Input label="E-mail" placeholder="kishorguriti119@gmail.com" />
      <Input label="password" placeholder="******" isPassword />
      <View style={style.checkBoxPlace}>
        <CheckBox isChecked={isChecked} handleCheck={setIsChecked} />
        <Text style={style.AgreeText}>
          I agree with <Text style={style.AgreeBold}>Terms</Text> &{' '}
          <Text style={style.AgreeBold}>Privacy</Text>
        </Text>
      </View>
      <Button title="Sign Up" Mystyle={style.customBtn} />
      <View>
        <Separator text="Or sign up with" />
      </View>
      <GoogleAuth />
      <View style={style.AuthFooter}>
        <AuthFooter
          onPress={OnSignIn}
          text="Sign In"
          prefix="Already have an account?"
        />
      </View>
    </ScrollView>
  );
};

export default SignUp;
