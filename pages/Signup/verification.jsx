import React, {useState} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import PrimaryButton from '../../components/primaryButton';

const cameraIcon = require('../../assets/camera-icon.png');
const removeIcon = require('../../assets/remove-icon.png');
const leftArrowIcon = require('../../assets/leftArrow-icon.png');

// action
import {saveData} from '../../slice/auth';

const Verification = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    proofOfRegistration: 'usda_registration.pdf',
  });

  const onChangeHandler = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const onSubmit = () => {
    try {
      const dataModal = {
        registration_proof: formData.proofOfRegistration,
      };
      dispatch(saveData(dataModal));
      navigation.navigate('hours');
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
          Signup 3 of 4
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#261C12',
            marginTop: 4,
          }}>
          Verification
        </Text>
      </View>

      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 50}>
        <ScrollView>
          <View style={{flex: 1, marginTop: 24, rowGap: 40}}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: '#0000004D',
              }}>
              Attached proof of Department of Agriculture registrations i.e.
              Florida Fresh, USDA Approved, USDA Organic
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: '#261C12',
                }}>
                Attach proof of registration
              </Text>
              <Pressable
                onPress={() =>
                  setFormData({proofOfRegistration: 'usda_registration.pdf'})
                }
                style={{
                  height: 53,
                  width: 53,
                  borderRadius: 50,
                  backgroundColor: '#D5715B',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={cameraIcon} />
              </Pressable>
            </View>

            {formData.proofOfRegistration && (
              <View
                style={{
                  height: 48,
                  backgroundColor: '#e7e6e4',
                  borderRadius: 8,
                  paddingHorizontal: 16,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: '#261C12',
                    textDecorationLine: 'underline',
                  }}>
                  {formData.proofOfRegistration}
                </Text>
                <Pressable
                  onPress={() => setFormData({proofOfRegistration: ''})}>
                  <Image source={removeIcon} />
                </Pressable>
              </View>
            )}
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
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={leftArrowIcon} />
        </Pressable>
        <PrimaryButton label={'Continue'} width={'58%'} action={onSubmit} />
      </View>
    </View>
  );
};

export default Verification;
