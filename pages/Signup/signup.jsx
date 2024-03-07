import React, {useState} from 'react';
import {
  Text,
  View,
  Pressable,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
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

// action
import {saveData} from '../../slice/auth';

const Signup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [hideState, setHideState] = useState({
    password: true,
    confirmPassword: true,
  });
  const [formData, setFormData] = useState({
    fullName: 'Kunal Kamat',
    email: 'kunalkamat@gmail.com',
    phoneNumber: '+919403634387',
    password: '12345678',
    confirmPassword: '12345678',
  });

  const onChangeHandler = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const controlHideState = field => {
    setHideState({...hideState, [field]: !hideState[field]});
  };

  const onSubmit = ({authProvider, social_id, email, password}) => {
    try {
      const dataModal = {
        full_name: formData.fullName,
        email: email || formData.email,
        phone: formData.phoneNumber,
        password: password || formData.password,
        type: authProvider,
        social_id: social_id,
      };
      dispatch(saveData(dataModal));
      navigation.navigate('farmInfo');
    } catch (error) {
      Alert.alert('Internal Error', error.message);
    }
  };

  return (
    <View style={{flex: 1, padding: 30, flexDirection: 'column'}}>
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

      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 50}>
        <ScrollView>
          <View style={{flex: 1, marginTop: 40}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <AuthProviderBtn
                icon={googleIcon}
                action={() =>
                  onSubmit({
                    email: 'kunalkamat3@gmail.com',
                    password: '12345678',
                    authProvider: 'google',
                    social_id: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
                  })
                }
              />
              <AuthProviderBtn
                icon={appleIcon}
                action={() =>
                  onSubmit({
                    email: 'kunalkamat3@gmail.com',
                    password: '12345678',
                    authProvider: 'apple',
                    social_id: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
                  })
                }
              />
              <AuthProviderBtn
                icon={facebookIcon}
                action={() =>
                  onSubmit({
                    email: 'kunalkamat3@gmail.com',
                    password: '12345678',
                    authProvider: 'facebook',
                    social_id: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
                  })
                }
              />
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
                onChange={value => onChangeHandler('fullName', value)}
                placeholder={'Full Name'}
                autoComplete={'name'}
                startIcon={personIcon}
              />
              <PrimaryInput
                value={formData.email}
                onChange={value => onChangeHandler('email', value)}
                placeholder={'Email Address'}
                autoComplete={'email'}
                startIcon={emailIcon}
              />
              <PrimaryInput
                value={formData.phoneNumber}
                onChange={value => onChangeHandler('phoneNumber', value)}
                placeholder={'Phone Number'}
                autoComplete={'tel'}
                startIcon={phoneIcon}
              />
              <PrimaryInput
                value={formData.password}
                onChange={value => onChangeHandler('password', value)}
                placeholder={'Password'}
                autoComplete={'password'}
                startIcon={passwordIcon}
                isSecure={hideState.password}
                endAction={
                  <Pressable onPress={() => controlHideState('password')}>
                    <Text
                      style={{fontSize: 14, fontWeight: 400, color: '#D5715B'}}>
                      {hideState.password ? 'Show' : 'Hide'}
                    </Text>
                  </Pressable>
                }
              />
              <PrimaryInput
                value={formData.confirmPassword}
                onChange={value => onChangeHandler('confirmPassword', value)}
                placeholder={'Re-enter Password'}
                autoComplete={'password'}
                startIcon={passwordIcon}
                isSecure={hideState.confirmPassword}
                endAction={
                  <Pressable
                    onPress={() => controlHideState('confirmPassword')}>
                    <Text
                      style={{fontSize: 14, fontWeight: 400, color: '#D5715B'}}>
                      {hideState.confirmPassword ? 'Show' : 'Hide'}
                    </Text>
                  </Pressable>
                }
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

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
          action={() => onSubmit({authProvider: 'email', social_id: ''})}
        />
      </View>
    </View>
  );
};

export default Signup;
