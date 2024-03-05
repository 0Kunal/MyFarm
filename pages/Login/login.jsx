import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/primaryButton';
import AuthProviderBtn from '../../components/authProviderBtn';
import PrimaryInput from '../../components/primaryInput';

const googleIcon = require('../../assets/google-icon.png');
const appleIcon = require('../../assets/apple-icon.png');
const facebookIcon = require('../../assets/facebook-icon.png');
const emailIcon = require('../../assets/email-icon.png');
const passwordIcon = require('../../assets/password-icon.png');

const Login = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
            Welcome back!
          </Text>
        </View>
        <View style={{flexDirection: 'row', columnGap: 4}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: '#0000004D',
            }}>
            New here?
          </Text>
          <Pressable onPress={() => navigation.navigate('signup')}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#D5715B',
              }}>
              Create account
            </Text>
          </Pressable>
        </View>
      </View>
      <PrimaryInput
        value={formData.email}
        onChange={e => onChangeHandler('email', e.target.value)}
        placeholder={'Email Address'}
        autoComplete={'email'}
        startIcon={emailIcon}
      />
      <PrimaryInput
        value={formData.password}
        onChange={e => onChangeHandler('password', e.target.value)}
        placeholder={'Password'}
        autoComplete={'password'}
        startIcon={passwordIcon}
        isSecure={true}
        endAction={
          <Pressable onPress={() => navigation.navigate('forgotPassword')}>
            <Text style={{fontSize: 14, fontWeight: 400, color: '#D5715B'}}>
              Forgot?
            </Text>
          </Pressable>
        }
      />
      <PrimaryButton
        label={'Login'}
        action={() => navigation.navigate('home')}
      />
      <View>
        <Text
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: '#261C124D',
            textAlign: 'center',
          }}>
          or login with
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <AuthProviderBtn icon={googleIcon} action={() => {}} />
        <AuthProviderBtn icon={appleIcon} action={() => {}} />
        <AuthProviderBtn icon={facebookIcon} action={() => {}} />
      </View>
    </View>
  );
};

export default Login;
