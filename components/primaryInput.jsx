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
        backgroundColor: '#eeedec',
        borderRadius: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      {startIcon && <Image source={startIcon} />}
      <TextInput
        value={value}
        onChange={onChange}
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
