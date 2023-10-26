import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import {style} from './style';
import Button from '../../../Components/Button';
import Image_Carousel from '../../../Components/Image_Carousel';

const ProductDetails = ({route, navigation}) => {
  const {product} = route?.params || {};

  return (
    <SafeAreaView style={style.safe}>
      <ScrollView>
        {product?.images?.length ? (
          <Image_Carousel images={product?.images} />
        ) : (
          <Image source={{uri: product?.image}} style={style.ProductImage} />
        )}

        <View style={style.content}>
          <Text style={style.ProductName}>{product?.title}</Text>
          <Text style={style.ProductPrice}>{product?.price}</Text>
          <Text style={style.ProductDescription}>
            {product?.discription ? product?.discription : ''}
          </Text>
          <Text style={style.ProductDescription}>
            {product?.discription ? product?.discription : ''}
          </Text>
        </View>
      </ScrollView>

      <Pressable
        hitSlop={20}
        style={style.BackIconContainer}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../../assets/back_arrow_icon.png')}
          style={style.backIcon}
        />
      </Pressable>

      <View style={style.footerContainer}>
        <Pressable style={style.bookmarkContainer}>
          <Image
            source={require('../../../assets/bookmark.png')}
            style={style.bookmarkIcon}
          />
        </Pressable>
        <View style={style.FooterButtonContainer}>
          <Button title="Contact Seller" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
