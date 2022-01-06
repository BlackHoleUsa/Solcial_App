import React, {useRef, useState} from 'react';
import {Animated, Image, TouchableOpacity, View} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';
import useCarousel from '../../../../hooks/useCarousel';
import {styles} from './Styles';

// indicators
// automatic shuffling of images

const Carousel = ({images}) => {
  const {currentImage, animation, moveBack, moveForward} = useCarousel(images);

  return (
    <React.Fragment>
      <View>
        <View style={styles.container_icons}>
          <TouchableOpacity onPress={moveBack}>
            <Icons name="chevron-back" size={25} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={moveForward}>
            <Icons name="chevron-forward" size={25} color={'black'} />
          </TouchableOpacity>
        </View>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{translateX: animation.current}],
            },
          ]}>
          {images.map((image, index) => (
            <View style={styles.container__image} key={image}>
              <Image
                key={image}
                resizeMode="contain"
                source={image}
                style={styles.image}
              />
            </View>
          ))}
        </Animated.View>
        <View style={styles.indicatorContainer}>
          {images.map((image, index) => (
            <View
              key={`${image}_${index}`}
              style={[
                styles.indicator,
                index === currentImage ? styles.activeIndicator : undefined,
              ]}
            />
          ))}
        </View>
      </View>
    </React.Fragment>
  );
};

export default Carousel;
