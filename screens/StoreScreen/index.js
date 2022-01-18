import React from 'react';
import {ScrollView, View, FlatList, ActivityIndicator} from 'react-native';
import {Text} from 'react-native-paper';
import {styles} from './Styles';
import Search from '../../components/Search';
import StoreCard from '../../components/StoreCard';
import {storeScreen} from '../../assets/Data';
import useStoreScreen from '../../hooks/useStoreScreen';
const StoreScreen = ({navigation}) => {
  const {isLoading, data, listRefresh, setListRefresh} = useStoreScreen();
  return (
    <View style={styles.container__main}>
      <Search />

      {isLoading ? (
        <View style={styles.container__loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <FlatList
          data={storeScreen}
          onRefresh={() => setListRefresh(true)}
          refreshing={listRefresh}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => item.id}
          ListFooterComponent={<View></View>}
          ListFooterComponentStyle={{marginVertical: 50}}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          renderItem={({item}) => (
            <View style={{width: '45%'}}>
              <StoreCard navigation={navigation} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default StoreScreen;
