import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import { style } from './style';

const Favorities = () => {
  return (
    <SafeAreaView>
      <ScrollView style={style.Container}>
        <Text>Favorities</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Favorities);
