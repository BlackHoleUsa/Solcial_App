import React from 'react';
import {Alert, View} from 'react-native';
import Video from 'react-native-video';
import {styles} from './Styles';
const BackgroundVideo = ({children, video}) => {
  return (
    <View style={styles.container__main}>
      <Video
        source={{
          uri: 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4',
        }}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        pictureInPicture={true}
        poster="https://images.unsplash.com/photo-1593572547344-d8c3d0ff7d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdGVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80"
        posterResizeMode="cover"
        style={styles.container__video}
      />
      {children}
    </View>
  );
};

export default BackgroundVideo;
