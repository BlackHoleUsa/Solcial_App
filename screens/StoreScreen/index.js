import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import {styles} from './Styles';
import Search from '../../components/Search';
import StoreCard from '../../components/StoreCard';

import useStoreScreen from '../../hooks/useStoreScreen';
const StoreScreen = ({navigation}) => {
  const {
    isLoading,
    data,
    displayedData,
    listRefresh,
    setListRefresh,
    setDisplayedData,
  } = useStoreScreen();
  return (
    <View style={styles.container__main}>
      <Search
        data={displayedData}
        setData={setDisplayedData}
        originalData={data}
      />

      {isLoading ? (
        <View style={styles.container__loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <FlatList
          data={displayedData}
          onRefresh={() => setListRefresh(true)}
          refreshing={listRefresh}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => item._id}
          ListFooterComponent={<View></View>}
          ListFooterComponentStyle={{marginVertical: 50}}
          columnWrapperStyle={{justifyContent: 'space-around'}}
          renderItem={({item}) => (
            <View style={{width: '45%'}}>
              <StoreCard navigation={navigation} item={item} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default StoreScreen;
