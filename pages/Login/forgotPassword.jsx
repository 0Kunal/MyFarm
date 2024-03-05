import React, {useState} from 'react';
import {Text, View, Pressable, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import PrimaryButton from '../../components/primaryButton';
import PrimaryInput from '../../components/primaryInput';

const phoneIcon = require('../../assets/phone-icon.png');

// action
import {sendOtp} from '../../thunk/auth';
import {saveData} from '../../slice/auth';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    phoneNumber: '+1984512598',
  });

  const onChangeHandler = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const onSendCode = async () => {
    try {
      const reqModal = {
        mobile: formData.phoneNumber,
      };
      const response = await dispatch(sendOtp(reqModal)).unwrap();
      if (response.success) {
        dispatch(saveData(reqModal));
        navigation.navigate('otp');
      } else {
        Alert.alert('Send OTP Error', response.message);
      }
    } catch (error) {
      Alert.alert('Internal Error', error.message);
    }
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
            Forgot Password?
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
        value={formData.phoneNumber}
        onChange={e => onChangeHandler('phoneNumber', e.target.value)}
        placeholder={'Phone Number'}
        autoComplete={'tel'}
        startIcon={phoneIcon}
      />
      <PrimaryButton label={'Send Code'} action={onSendCode} />
    </View>
  );
};

export default ForgotPassword;
