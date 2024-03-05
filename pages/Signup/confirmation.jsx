import React from 'react';
import {Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/primaryButton';

const successIcon = require('../../assets/success-icon.png');

const Confirmation = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, padding: 30}}>
      <View
        style={{flex: 1, alignItems: 'center', rowGap: 32, marginTop: 154.59}}>
        <View style={{alignItems: 'center'}}>
          <Image source={successIcon} />
        </View>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#261C12',
          }}>
          You're all done!
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: '#898989',
            textAlign: 'center',
            width: '95%',
          }}>
          Hang tight! We are currently reviewing your account and will follow up
          with you in 2-3 business days. In the meantime, you can setup your
          inventory.
        </Text>
      </View>

      <View
        style={{
          paddingVertical: 12,
        }}>
        <PrimaryButton
          label={'Got it!'}
          action={() => navigation.navigate('home')}
        />
      </View>
    </View>
  );
};

export default Confirmation;
