import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './style';
import AppHeader from '../../../Components/AppHeader';
import ProductItem from '../../../Components/ProductItem';
import Input from '../../../Components/Input/inedx';
import {CategoryList} from '../../../Data/CategoryList';
import CategoryBox from '../../../Components/CategoryBox';
import {products} from '../../../Data/Products';

const Home = () => {
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [ProductList, setProductList] = useState(products);
  const [keyWord, setKeyWord] = useState('');

  const toogleSearchInput = () => {
    setOpenSearchInput(!openSearchInput);
  };

  useEffect(() => {
    if (selectedCategory && !keyWord) {
      let filteredProducts = products.filter(
        product => product.category === selectedCategory,
      );
      setProductList(filteredProducts);
    } else if (selectedCategory && keyWord) {
      let filteredProducts = products.filter(
        product =>
          product.category === selectedCategory &&
          product.title
            ?.toLocaleLowerCase()
            .includes(keyWord?.toLocaleLowerCase()),
      );

      setProductList(filteredProducts);
    } else if (!selectedCategory && keyWord) {
      let filteredProducts = products.filter(product =>
        product.title
          ?.toLocaleLowerCase()
          .includes(keyWord?.toLocaleLowerCase()),
      );
      setProductList(filteredProducts);
    } else {
      setProductList(products);
    }
  }, [selectedCategory, keyWord]);

  const renderListItem = ({item}) => {
    return (
      <CategoryBox
        title={item?.title}
        image={item?.image}
        onPress={() => setSelectedCategory(item.id)}
        isSelected={item.id === selectedCategory}
      />
    );
  };

  const renderProducts = ({item}) => {
    return <ProductItem item={{...item}} />;
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
            <Input
              placeholder="Type Your Keyword"
              onChangeText={value => setKeyWord(value)}
            />
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

        <FlatList
          data={ProductList}
          renderItem={renderProducts}
          numColumns={2}
          keyExtractor={item => item.id}
          ListFooterComponent={<View style={{height: 100}}></View>}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
