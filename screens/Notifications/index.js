import React from 'react';
import {ActivityIndicator, View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';

import CustomStatusBar from '../../components/CustomStatusBar';
import {styles} from './Styles';

import SingleNotification from './SingleNotification';
import useNotifications from '../../hooks/useNotifications';
const Notifications = () => {
  const {isLoading, isFocused, listRefresh, data, setListRefresh} =
    useNotifications();
  return (
    <View style={styles.container__main}>
      {isFocused && (
        <CustomStatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      )}
      {isLoading ? (
        <View style={styles.container__loader}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <>
          <Text style={styles.heading__main}>Notifications </Text>
          <View style={styles.container__notification}>
            <FlatList
              onRefresh={() => setListRefresh(true)}
              refreshing={listRefresh}
              data={data}
              horizontal={false}
              keyExtractor={item => item._id}
              ListFooterComponent={<View></View>}
              ListFooterComponentStyle={{marginVertical: 50}}
              renderItem={({item}) => (
                <SingleNotification item={item.extraData} />
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Notifications;
