import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './style';
import AuthHeader from '../../../Components/AuthHeader';
import AppHeader from '../../../Components/AppHeader';

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView style={style.Container}>
        <AppHeader logout title="Profile" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
