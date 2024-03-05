import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/primaryButton';
import OTPTextView from 'react-native-otp-textinput';

const OTP = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    otp: '',
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
            Verify OTP
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
      <OTPTextView
        inputCount={5}
        tintColor={'#D5715B'}
        offTintColor={'#eeedec'}
        autoFocus={true}
        handleTextChange={value => onChangeHandler('otp', value)}
        textInputStyle={{
          backgroundColor: '#eeedec',
          color: '#261C12',
          borderRadius: 8,
          width: 58,
          height: 59,
          margin: 0,
          borderBottomWidth: 1,
          borderWidth: 1,
        }}
      />
      <PrimaryButton
        label={'Submit'}
        action={() => navigation.navigate('resetPassword')}
      />
      <Pressable onPress={() => {}}>
        <Text
          style={{
            fontSize: 14,
            color: '#261C12',
            textDecorationLine: 'underline',
            fontWeight: 500,
            textAlign: 'center',
          }}>
          Resend Code
        </Text>
      </Pressable>
    </View>
  );
};

export default OTP;
