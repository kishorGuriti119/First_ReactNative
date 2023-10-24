import React from 'react';
import {FlatList, SafeAreaView, View, ScrollView, Text} from 'react-native';
import {style} from './style';
import {products} from '../../../Data/Products';
import FavoriteItem from '../../../Components/FavoriteItem';
import AppHeader from '../../../Components/AppHeader';

const Favorities = ({navigation}) => {
  const onFavItemClick = product => {
    navigation.navigate('ProductDetails', {product});
  };

  const renderFavoriteItems = ({item}) => {
    return <FavoriteItem {...item} onPress={() => onFavItemClick(item)} />;
  };

  return (
    <SafeAreaView>
      <View style={style.Container}>
        <AppHeader title="Favorites" />

        <FlatList
          data={products}
          renderItem={renderFavoriteItems}
          keyExtractor={item => item.index}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View style={{height: 100}} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Favorities);
