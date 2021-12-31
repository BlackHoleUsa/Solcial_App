import React from 'react';
import {View, StyleSheet, TextInput, Text, Platform} from 'react-native';

const InputField = props => {
  const [text, onChangeText] = React.useState('Solcial app');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container__main}>
      <Text style={styles.text__input}>{props.label}</Text>
      <View style={styles.container__input}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          selectionColor="white"
          placeholder="Email"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container__main: {
    width: '100%',
    marginBottom: 10,
  },
  container__input: {
    borderWidth: 1,
    borderColor: '#707070',
  },
  input: {
    height: 20,
    margin: 10,

    color: 'white',
    padding: 10,
    paddingVertical: 0,
    fontFamily: 'Poppins-Regular',
  },
  text__input: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
    fontWeight: Platform.OS === 'ios' ? '600' : 'normal',
  },
});
export default InputField;
