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
import {useDispatch, useSelector} from 'react-redux';
import PrimaryButton from '../../components/primaryButton';

const leftArrowIcon = require('../../assets/leftArrow-icon.png');

// action
import {register} from '../../thunk/auth';
import {saveData} from '../../slice/auth';

const days = [
  {initial: 'M', key: 'mon'},
  {initial: 'T', key: 'tue'},
  {initial: 'W', key: 'wed'},
  {initial: 'Th', key: 'thu'},
  {initial: 'F', key: 'fri'},
  {initial: 'S', key: 'sat'},
  {initial: 'Su', key: 'sun'},
];

const daySlots = [
  '8:00am - 10:00am',
  '10:00am - 1:00pm',
  '1:00pm - 4:00pm',
  '4:00pm - 7:00pm',
  '7:00pm - 10:00pm',
];

const ConditionalRender = ({day, isActive, slots, onPress}) => {
  if (isActive) {
    return (
      <Pressable
        onPress={onPress}
        style={{
          height: 36,
          width: 37,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#D5715B',
          backgroundColor: '#D5715B',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: '#FFFFFF',
          }}>
          {day.initial}
        </Text>
      </Pressable>
    );
  } else if (slots > 0) {
    return (
      <Pressable
        onPress={onPress}
        style={{
          height: 36,
          width: 37,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#261C124D',
          backgroundColor: '#e7e6e4',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: '#261C12',
          }}>
          {day.initial}
        </Text>
      </Pressable>
    );
  } else {
    return (
      <Pressable
        onPress={onPress}
        style={{
          height: 36,
          width: 37,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#261C124D',
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: '#261C124D',
          }}>
          {day.initial}
        </Text>
      </Pressable>
    );
  }
};

const Hours = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const reduxState = useSelector(state => state.auth);
  const [activeDay, setActiveDay] = useState('mon');
  const [formData, setFormData] = useState({
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: [],
  });

  const onChangeHandler = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const updateSlot = slot => {
    if (formData[activeDay].includes(slot)) {
      const updatedSlots = formData[activeDay].filter(s => s !== slot);
      onChangeHandler(activeDay, updatedSlots);
    } else {
      onChangeHandler(activeDay, [...formData[activeDay], slot]);
    }
  };

  const onSignup = async () => {
    try {
      const reqModal = {
        full_name: reduxState.full_name,
        email: reduxState.email,
        phone: reduxState.phone,
        password: reduxState.password,
        role: 'farmer',
        business_name: reduxState.business_name,
        informal_name: reduxState.informal_name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip_code: reduxState.zip_code,
        registration_proof: reduxState.registration_proof,
        business_hours: formData,
        device_token: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
        type: reduxState.type,
        social_id: reduxState.social_id,
      };
      const response = await dispatch(register(reqModal)).unwrap();
      if (response.success) {
        dispatch(saveData(response));
        navigation.navigate('confirmation');
      } else {
        Alert.alert('Signup Failed', response.message);
      }
    } catch (error) {
      Alert.alert('Internal Error', error.message || error.toString());
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
          Signup 4 of 4
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#261C12',
            marginTop: 4,
          }}>
          Business Hours
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
              Choose the hours your farm is open for pickups. This will allow
              customers to order deliveries.
            </Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {days.map((day, index) => (
                <ConditionalRender
                  key={index}
                  day={day}
                  isActive={day.key === activeDay}
                  slots={formData[day.key].length}
                  onPress={() => setActiveDay(day.key)}
                />
              ))}
            </View>

            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                rowGap: 12,
              }}>
              {daySlots.map((slot, index) => (
                <Pressable
                  onPress={() => updateSlot(slot)}
                  key={index}
                  style={{
                    height: 48,
                    width: '48%',
                    borderRadius: 8,
                    backgroundColor: formData[activeDay].includes(slot)
                      ? '#F8C569'
                      : '#e7e6e4',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#261C12',
                    }}>
                    {slot}
                  </Text>
                </Pressable>
              ))}
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
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={leftArrowIcon} />
        </Pressable>
        <PrimaryButton label={'Signup'} width={'58%'} action={onSignup} />
      </View>
    </View>
  );
};

export default Hours;
