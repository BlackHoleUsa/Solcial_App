import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import {styles} from './Styles';
const BackgroundVideo = ({children}) => {
  return (
    <View style={styles.container__main}>
      <Video
        source={require('../../assets/videos/stock.mp4')}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        style={styles.container__video}
      />
    </View>
  );
};

export default BackgroundVideo;
