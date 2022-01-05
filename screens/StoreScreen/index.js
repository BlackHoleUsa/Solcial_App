import React from 'react';
import {ScrollView, View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import Search from '../../components/Search';
import StoreCard from '../../components/StoreCard';
import {storeScreen} from '../../assets/Data';

const StoreScreen = ({navigation}) => {
  return (
    <View style={styles.container__main}>
      <Search />

      <FlatList
        data={storeScreen}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.id}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        renderItem={({item}) => (
          <View style={{width: '45%'}}>
            <StoreCard navigation={navigation} />
          </View>
        )}
      />
    </View>
  );
};

export default StoreScreen;
