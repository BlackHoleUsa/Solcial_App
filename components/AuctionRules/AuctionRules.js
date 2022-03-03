import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import CustomModal from '../CustomModal';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Styles';
import Heading from '../Heading/Heading';
import CustomRule from './CustomRule/CustomRule';
import {rules} from './rules';
export default function AuctionRules({visible, hideModal}) {
  return (
    <CustomModal visible={visible} hideModal={hideModal}>
      <View style={styles.container__main}>
        <TouchableOpacity
          style={styles.container__cross}
          onPress={() => hideModal()}>
          <Icons name="close" color={'black'} size={25} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.container__rules}>
          {rules.map(rule => {
            return (
              <>
                <Heading
                  heading={rule?.heading}
                  index={rule?.index}
                  key={rule.id}
                />
                <CustomRule index={rule?.number} text={rule?.text} />
              </>
            );
          })}
        </ScrollView>
      </View>
    </CustomModal>
  );
}
