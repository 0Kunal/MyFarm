import React, {useState} from 'react';
import {Text, View, Pressable, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import PrimaryButton from '../../components/primaryButton';
import PrimaryInput from '../../components/primaryInput';

const passwordIcon = require('../../assets/password-icon.png');

// action
import {resetPassword} from '../../thunk/auth';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const reduxState = useSelector(state => state.auth);
  const [hideState, setHideState] = useState({
    newPassword: true,
    confirmPassword: true,
  });
  const [formData, setFormData] = useState({
    newPassword: 'examplepassword',
    confirmPassword: 'examplepassword',
  });

  const onChangeHandler = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const onResetPassword = async () => {
    try {
      const reqModal = {
        token: reduxState.otp,
        password: formData.newPassword,
        cpassword: formData.confirmPassword,
      };
      const response = await dispatch(resetPassword(reqModal)).unwrap();
      if (response.success) {
        navigation.navigate('login');
      } else {
        Alert.alert('Reset Password Failed', response.message);
      }
    } catch (error) {
      Alert.alert('Internal Error', error.message);
    }
  };

  const controlHideState = field => {
    setHideState({...hideState, [field]: !hideState[field]});
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
        isSecure={hideState.newPassword}
        endAction={
          <Pressable onPress={() => controlHideState('newPassword')}>
            <Text style={{fontSize: 14, fontWeight: 400, color: '#D5715B'}}>
              {hideState.newPassword ? 'Show' : 'Hide'}
            </Text>
          </Pressable>
        }
      />
      <PrimaryInput
        value={formData.confirmPassword}
        onChange={e => onChangeHandler('confirmPassword', e.target.value)}
        placeholder={'Confirm New Password'}
        autoComplete={'password'}
        startIcon={passwordIcon}
        isSecure={hideState.confirmPassword}
        endAction={
          <Pressable onPress={() => controlHideState('confirmPassword')}>
            <Text style={{fontSize: 14, fontWeight: 400, color: '#D5715B'}}>
              {hideState.confirmPassword ? 'Show' : 'Hide'}
            </Text>
          </Pressable>
        }
      />
      <PrimaryButton label={'Submit'} action={onResetPassword} />
    </View>
  );
};

export default ResetPassword;
