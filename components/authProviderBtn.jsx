import React from 'react';
import {Image, Pressable, Text} from 'react-native';

const AuthProviderBtn = ({icon, action}) => {
  return (
    <Pressable
      onPress={() => action()}
      style={{
        height: 52,
        width: 96,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#00000014',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={icon}
        style={{objectFit: 'cover', width: 30, height: 30}}
      />
    </Pressable>
  );
};

export default AuthProviderBtn;
