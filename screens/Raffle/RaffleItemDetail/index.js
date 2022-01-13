import React from 'react';
import {Text, View} from 'react-native';
import RaffleAndAuctionDetailCard from '../../../components/RaffleAndAuctionDetailCard';
import BackgroundVideo from '../../BackgroundVideo';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
const RaffleItemDetail = ({route, navigation}) => {
  const {id, title, image, video, description} = route.params;
  return (
    <BackgroundVideo video={video}>
      <View style={styles.container__main}>
        <View style={styles.container__icon}>
          <Icons
            name="arrow-back-circle"
            size={40}
            color={'white'}
            onPress={() => navigation.goBack()}
          />
          <Icons name="information-circle-outline" size={40} color={'white'} />
        </View>
        <RaffleAndAuctionDetailCard
          title={title}
          image={image}
          description={description}
          navigation={navigation}
        />
      </View>
    </BackgroundVideo>
  );
};

export default RaffleItemDetail;
