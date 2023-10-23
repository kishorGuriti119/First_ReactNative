import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './style';
import AppHeader from '../../../Components/AppHeader';
import Input from '../../../Components/Input/inedx';
import {CategoryList} from '../../../Data/CategoryList';
import CategoryBox from '../../../Components/CategoryBox';

const Home = () => {
  const [openSearchInput, setOpenSearchInput] = useState(false);

  const toogleSearchInput = () => {
    setOpenSearchInput(!openSearchInput);
  };

  const renderListItem = ({item}) => {
    return <CategoryBox title={item?.title} image={item?.image} />;
  };

  return (
    <SafeAreaView>
      <ScrollView style={style.Container}>
        <AppHeader
          search
          title="Find All You Need"
          onSearchClick={toogleSearchInput}
        />

        {openSearchInput ? (
          <View>
            <Input placeholder="Enter Keyword" />
          </View>
        ) : null}

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={CategoryList}
          style={{marginVertical: 24}}
          horizontal
          renderItem={renderListItem}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
