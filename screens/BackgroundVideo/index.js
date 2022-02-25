import React, {useState} from 'react';
import {Alert, View, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import {styles} from './Styles';
const BackgroundVideo = ({children, video}) => {
  const [loading, setLoading] = useState(false);
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
        onLoadStart={() => setLoading(true)}
        onReadyForDisplay={() => setLoading(false)}
      />
      {loading ? (
        <View style={styles.container__loader}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : null}
      <>{children}</>
    </View>
  );
};

export default BackgroundVideo;
