import React, {useState, useRef} from 'react';
import {Animated} from 'react-native';
import {MAX_WIDTH} from '../screens/StoreScreen/StoreItemDetail/Carousel/Styles';
const useCarousel = images => {
  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);

  const moveBack = () => {
    let newCurrentImage = currentImage - 1;

    if (newCurrentImage < 0) {
      newCurrentImage = images.length - 1;
    }

    Animated.spring(animation.current, {
      toValue: -(MAX_WIDTH * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };
  const moveForward = () => {
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

  return {
    currentImage,
    animation,
    moveBack,
    moveForward,
  };
};

export default useCarousel;
