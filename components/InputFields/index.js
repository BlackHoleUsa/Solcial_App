import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './Styles';
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

export default InputField;
