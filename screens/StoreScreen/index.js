/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';

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
          initialNumToRender={10}
          keyExtractor={item => item._id}
          ListEmptyComponent={
            <View style={styles.container__empty}>
              <Text style={styles.text__empty}>No Item Found</Text>
            </View>
          }
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
