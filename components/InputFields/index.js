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
          style={[styles.input, props.inputstyle]}
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
            color={props.iconColorBlack ? 'black' : 'white'}
            style={styles.icon}
            onPress={props.iconChange}
          />
        ) : null}
      </View>
      <View style={{height: 15}}>
        {props.errors ? (
          <Text style={styles.text__errors}>{props.errors}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default InputField;
