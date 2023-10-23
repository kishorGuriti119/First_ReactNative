import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './style';

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView style={style.Container}>
        <Text>Profile</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
