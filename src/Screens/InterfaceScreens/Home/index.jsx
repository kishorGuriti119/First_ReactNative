import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './style';
import AppHeader from '../../../Components/AppHeader';

const Home = () => {
  const [openSearchInput, setSearchInput] = useState(false);

  const toogleSearchInput = () => {
    setSearchInput(!openSearchInput);
  };

  return (
    <SafeAreaView>
      <ScrollView style={style.Container}>
        <AppHeader
          search
          title="Find All You Need"
          onSearchClick={toogleSearchInput}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
