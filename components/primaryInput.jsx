import React from 'react';
import {Image, TextInput, View} from 'react-native';

const PrimaryInput = ({
  value,
  onChange,
  placeholder,
  autoComplete,
  isSecure,
  startIcon,
  endAction,
}) => {
  return (
    <View
      style={{
        height: 48,
        backgroundColor: '#e7e6e4',
        borderRadius: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {startIcon && <Image source={startIcon} />}
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        secureTextEntry={isSecure}
        style={{
          flex: 1,
          marginHorizontal: 8,
        }}
      />
      {endAction && endAction}
    </View>
  );
};

export default PrimaryInput;
