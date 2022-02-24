import React from 'react';
import {Alert, View} from 'react-native';
import Video from 'react-native-video';
import {styles} from './Styles';
const BackgroundVideo = ({children, video}) => {
  // console.log('video', video);
  // 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4'
  return (
    <View style={styles.container__main}>
      <Video
        source={{
          uri: video,
        }}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        pictureInPicture={true}
        style={styles.container__video}
      />
      {children}
    </View>
  );
};

export default BackgroundVideo;
