import * as React from 'react';
import {FieldError} from 'react-hook-form';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {Text} from './Text';
import {View} from './View';

interface Props extends TextInputProps {
  name?: string;
  disabled?: boolean;
  label?: string;
  error?: FieldError | undefined;
}

export const Input = ({placeholder, error, ...props}: Props) => {
  return (
    <View marginBottom="s" style={styles.container}>
      <TextInput
        style={[styles.container, error ? styles.error : {}]}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <Text color="red" fontSize={13}>
          {error?.message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {   
    backgroundColor: "#ecf0f1",
    borderRadius: 6,
    borderColor:'black',
    width: "70%",
    height: 45,
    marginBottom: 20,
    
  },
  error: {
    borderWidth: 1,
    borderColor: 'red',
    padding:10,
  },
});