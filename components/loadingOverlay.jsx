import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const LoadingOverlay = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
      }}>
      <ActivityIndicator size={50} color="#D5715B" />
    </View>
  );
};

export default LoadingOverlay;
