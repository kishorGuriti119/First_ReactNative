import React, {useState} from 'react';
import {View, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {style} from './style';
import {Dimensions} from 'react-native';

const Image_Carousel = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(props.images);

  const {width} = Dimensions.get('window');

  const renderItem = ({item}) => {
    console.log({item});
    return (
      <View style={style.carouselItem}>
        <Image style={style.image} source={{uri: item}} />
      </View>
    );
  };

  return (
    <>
      <Carousel
        data={props.images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={index => setActiveIndex(index)}
      />

      <Pagination
        dotsLength={props.images.length}
        activeDotIndex={activeIndex}
        containerStyle={style.paginationContainer}
        dotStyle={style.paginationDot}
        inactiveDotOpacity={0.3}
        inactiveDotScale={1}
      />
    </>
  );
};

export default Image_Carousel;
