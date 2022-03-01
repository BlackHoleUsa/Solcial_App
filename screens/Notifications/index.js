import React from 'react';
import {ActivityIndicator, View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';

import CustomStatusBar from '../../components/CustomStatusBar';
import {styles} from './Styles';

import SingleNotification from './SingleNotification';
import useNotifications from '../../hooks/useNotifications';
import useModal from '../../hooks/useModal';
import AuctionPayment from '../../components/AuctionPayment';
const Notifications = ({navigation}) => {
  const {
    isLoading,
    isFocused,
    listRefresh,
    data,
    amount,
    id,
    setId,
    setAmount,
    setListRefresh,
  } = useNotifications();
  const {visible, showModal, hideModal} = useModal();
  const [notificationId, setNotificationId] = React.useState();
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
                <SingleNotification
                  item={item}
                  showModal={showModal}
                  setAmount={setAmount}
                  setId={setId}
                  setNotificationId={setNotificationId}
                />
              )}
            />
          </View>
        </>
      )}
      {visible ? (
        <AuctionPayment
          visible={visible}
          hideModal={hideModal}
          amount={amount}
          id={id}
          notificationId={notificationId}
          navigation={navigation}
        />
      ) : null}
    </View>
  );
};

export default Notifications;
