import React from 'react';
import {Pressable, Text} from 'react-native';

const PrimaryButton = ({label, action, color, width, height}) => {
  return (
    <Pressable
      onPress={() => action()}
      style={{
        borderRadius: 117,
        backgroundColor: color || '#D5715B',
        height: height || 52,
        width: width || '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18, color: '#FFFFFF', fontWeight: 500}}>
        {label}
      </Text>
    </Pressable>
  );
};

export default PrimaryButton;
