import {View, Text, TouchableOpacity, ScrollView, Linking} from 'react-native';
import React from 'react';
import CustomModal from '../CustomModal';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './Styles';
import Heading from '../Heading/Heading';
import {rules} from './Rules';
export default function RaffleRules({visible, hideModal}) {
  const url = 'https://www.createwithfandh.com/solecial-privacy-policy';
  const openUrl = async () => {
    await Linking.openURL(url);
  };
  return (
    <CustomModal visible={visible} hideModal={hideModal}>
      <View style={styles.container__main}>
        <TouchableOpacity
          style={styles.container__cross}
          onPress={() => hideModal()}>
          <Icons name="close" color={'black'} size={25} />
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.container__rules}>
          {rules.slice(0, 15).map(rule => {
            return (
              <>
                <Heading
                  heading={rule?.heading}
                  index={rule?.index}
                  key={rule.id}
                />
                <Text style={styles.text__rules}>{rule?.text}</Text>
              </>
            );
          })}
          <Heading heading="Privacy Policy" index={12} />
          <Text style={styles.text__rules}>
            Information submitted with an entry is subject to the Privacy Policy
            stated on the SOLEcial Gaming, Inc. Web Site. To read the Privacy
            Policy,
            <TouchableOpacity onPress={openUrl}>
              <Text style={{color: 'black'}}>click here</Text>
            </TouchableOpacity>
            .
          </Text>
          {rules.slice(17, 18).map(rule => {
            return (
              <>
                <Heading
                  heading={rule?.heading}
                  index={rule?.index}
                  key={rule.id}
                />
                <Text style={styles.text__rules}>{rule?.text}</Text>
              </>
            );
          })}
        </ScrollView>
      </View>
    </CustomModal>
  );
}
