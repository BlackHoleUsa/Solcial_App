import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './Styles';
import Icons from 'react-native-vector-icons/Ionicons';
const InputField = props => {
  return (
    <View style={[styles.container__main, props.style]}>
      <Text style={[styles.text__input, props.textStyle]}>{props.label}</Text>
      <View style={styles.container__input}>
        <TextInput
          style={[styles.input, props.style]}
          selectionColor="white"
          placeholder={props.placeholder}
          placeholderTextColor="white"
          textBreakStrategy="highQuality"
          secureTextEntry={props.secureTextEntry}
          {...props}
        />
        {props.icon ? (
          <Icons
            name={props.icon}
            size={25}
            color="white"
            style={styles.icon}
            onPress={props.iconChange}
          />
        ) : null}
      </View>
    </View>
  );
};

export default InputField;
