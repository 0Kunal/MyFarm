import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/primaryButton';
import AuthProviderBtn from '../../components/authProviderBtn';
import PrimaryInput from '../../components/primaryInput';

const googleIcon = require('../../assets/google-icon.png');
const appleIcon = require('../../assets/apple-icon.png');
const facebookIcon = require('../../assets/facebook-icon.png');
const personIcon = require('../../assets/person-icon.png');
const emailIcon = require('../../assets/email-icon.png');
const phoneIcon = require('../../assets/phone-icon.png');
const passwordIcon = require('../../assets/password-icon.png');

const Signup = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeHandler = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  return (
    <View style={{flex: 1, padding: 30, justifyContent: 'space-between'}}>
      <View style={{marginTop: 6}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: '#000000',
          }}>
          FarmerEats
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#0000004D',
            marginTop: 32,
          }}>
          Signup 1 of 4
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#261C12',
            marginTop: 4,
          }}>
          Welcome!
        </Text>
      </View>

      <View style={{flex: 1, marginTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <AuthProviderBtn icon={googleIcon} action={() => {}} />
          <AuthProviderBtn icon={appleIcon} action={() => {}} />
          <AuthProviderBtn icon={facebookIcon} action={() => {}} />
        </View>
        <Text
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: '#261C124D',
            textAlign: 'center',
            marginTop: 32,
          }}>
          or signup with
        </Text>
        <View style={{marginTop: 32, rowGap: 24}}>
          <PrimaryInput
            value={formData.fullName}
            onChange={e => onChangeHandler('fullName', e.target.value)}
            placeholder={'Full Name'}
            autoComplete={'name'}
            startIcon={personIcon}
          />
          <PrimaryInput
            value={formData.email}
            onChange={e => onChangeHandler('email', e.target.value)}
            placeholder={'Email Address'}
            autoComplete={'email'}
            startIcon={emailIcon}
          />
          <PrimaryInput
            value={formData.phoneNumber}
            onChange={e => onChangeHandler('phoneNumber', e.target.value)}
            placeholder={'Phone Number'}
            autoComplete={'tel'}
            startIcon={phoneIcon}
          />
          <PrimaryInput
            value={formData.password}
            onChange={e => onChangeHandler('password', e.target.value)}
            placeholder={'Password'}
            autoComplete={'password'}
            startIcon={passwordIcon}
            isSecure={true}
          />
          <PrimaryInput
            value={formData.confirmPassword}
            onChange={e => onChangeHandler('confirmPassword', e.target.value)}
            placeholder={'Re-enter Password'}
            autoComplete={'password'}
            startIcon={passwordIcon}
            isSecure={true}
          />
        </View>
      </View>

      <View
        style={{
          paddingVertical: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pressable onPress={() => navigation.navigate('login')}>
          <Text
            style={{
              fontSize: 14,
              color: '#000000',
              textDecorationLine: 'underline',
              fontWeight: 400,
            }}>
            Login
          </Text>
        </Pressable>
        <PrimaryButton
          label={'Continue'}
          width={'58%'}
          action={() => navigation.navigate('farmInfo')}
        />
      </View>
    </View>
  );
};

export default Signup;
