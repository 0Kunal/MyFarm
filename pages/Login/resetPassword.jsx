import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/primaryButton';
import PrimaryInput from '../../components/primaryInput';

const passwordIcon = require('../../assets/password-icon.png');

const ResetPassword = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const onChangeHandler = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  return (
    <View style={{flex: 1, padding: 30, rowGap: 32}}>
      <View style={{marginTop: 6}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: '#000000',
          }}>
          FarmerEats
        </Text>
      </View>
      <View style={{marginTop: 58, marginBottom: 40, rowGap: 24}}>
        <View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: '#261C12',
            }}>
            Reset Password
          </Text>
        </View>
        <View style={{flexDirection: 'row', columnGap: 4}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#0000004D',
            }}>
            Remember your pasword?
          </Text>
          <Pressable onPress={() => navigation.navigate('login')}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#D5715B',
              }}>
              Login
            </Text>
          </Pressable>
        </View>
      </View>
      <PrimaryInput
        value={formData.newPassword}
        onChange={e => onChangeHandler('newPassword', e.target.value)}
        placeholder={'New Password'}
        autoComplete={'password'}
        startIcon={passwordIcon}
        isSecure={true}
      />
      <PrimaryInput
        value={formData.confirmPassword}
        onChange={e => onChangeHandler('confirmPassword', e.target.value)}
        placeholder={'Confirm New Password'}
        autoComplete={'password'}
        startIcon={passwordIcon}
        isSecure={true}
      />
      <PrimaryButton
        label={'Submit'}
        action={() => navigation.navigate('login')}
      />
    </View>
  );
};

export default ResetPassword;
