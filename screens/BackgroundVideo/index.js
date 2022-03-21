import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import {styles} from './Styles';
const BackgroundVideo = ({children, video, isFocused}) => {
  const [loading, setLoading] = useState(false);

  // 'http://www.exit109.com/~dnn/clips/RW20seconds_1.mp4'
  return (
    <View style={styles.container__main}>
      <Video
        source={{
          uri: video,
        }}
        repeat={true}
        resizeMode={'stretch'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        pictureInPicture={true}
        style={styles.container__video}
        onLoadStart={() => setLoading(true)}
        onReadyForDisplay={() => setLoading(false)}
        paused={isFocused ? false : true}
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
