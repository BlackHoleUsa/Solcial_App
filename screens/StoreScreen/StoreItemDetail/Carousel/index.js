import React, {useRef, useState} from 'react';
import {Animated, Image, StyleSheet, View} from 'react-native';
import useInterval from '../../../../hooks/useInterval';

import {MAX_WIDTH, styles} from './Styles';

// indicators
// automatic shuffling of images

const Carousel = ({images}) => {
  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);
  useInterval(() => handleAnimation(), 5000);

  const handleAnimation = () => {
    let newCurrentImage = currentImage + 1;

    if (newCurrentImage >= images.length) {
      newCurrentImage = 0;
    }

    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };
  return (
    <React.Fragment>
      <View>
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
