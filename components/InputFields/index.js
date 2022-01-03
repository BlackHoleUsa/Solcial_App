import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
const InputField = props => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={[styles.container__main, props.style]}>
      <Text style={styles.text__input}>{props.label}</Text>
      <View style={styles.container__input}>
        <TextInput
          style={[styles.input, props.style]}
          onChangeText={onChangeText}
          value={text}
          selectionColor="white"
          placeholder={props.placeholder}
          placeholderTextColor="white"
          textBreakStrategy="highQuality"
        />
        {props.icon ? (
          <Icons
            name={props.icon}
            size={25}
            color="white"
            style={styles.icon}
          />
        ) : null}
      </View>
    </View>
  );
};

export default InputField;
