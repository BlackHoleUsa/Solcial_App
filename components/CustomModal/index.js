import React from 'react';
import {Modal, StyleSheet, ScrollView} from 'react-native';

export default function CustomModal({children, visible, hideModal}) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        hideModal();
      }}>
      <ScrollView contentContainerStyle={styles.container__main}>
        {children}
      </ScrollView>
    </Modal>
  );
}

export const styles = StyleSheet.create({
  container__main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    flex: 1,
  },
});
